import {IEXClient} from 'iex-api';
import * as _fetch from 'isomorphic-fetch';
import {StockData} from '../models/stockData';

module.exports = function (app) {

  app.route('/api/stock-prices')
    .get(function (req, res){
      const ip=req.ip;
      const iex= new IEXClient(_fetch);
      const stock=req.query.stock;

      if (typeof(req.query.stock)=='string'){ // Only 1 stock
        iex.stockPrice(stock).then((price:any)=>{
          if (price!='Unknown symbol'){ // Checks if stock is valid
            if (req.query.like){
              StockData.findOneAndUpdate({stock},
                {$addToSet:{likes:ip}},
              {new:true,upsert:true,fields:{__v:0}},(err,data)=>{
                if (err) handleError(err,res);
                res.json({stock, likes:data.likes.length, price});
            })
          } else { // No like
            StockData.findOne({stock},{__v:0},(err,data)=>{
              if (err) handleError(err,res);
              if (!data){
                return res.json({stock,price,likes:0})
              } else {
                res.json({stock,price,likes:data.likes.length});
              }
          })
          }
        } else {
          handleError('Invalid stock ticker',res)
        }
        })
      } else if (typeof(req.query.stock=='array')){
        if (req.query.stock.length!=2){
          handleError('Too many fields',res)
        } else {
          let stock1=stock[0];
          let stock2=stock[1];
          console.log(stock1, stock2)
          let promise1=iex.stockPrice(stock1);
          let promise2=iex.stockPrice(stock2);
          Promise.all([promise1,promise2]).then(values=>{
            values.forEach((value,i)=>{
              if (typeof(value)!='number'){
                handleError(`Invalid stock symbol: ${stock[i]}`,res);
              }
            })
              let updateQuery= req.query.like ? {$addToSet:{likes:ip}} : {}
              let options={new:true,upsert:true,fields:{__v:0}};
              StockData.findOneAndUpdate({stock:stock1},updateQuery, options,(err,s1data)=>{
                if (err) handleError(err,res);
                StockData.findOneAndUpdate({stock:stock2}, updateQuery, options, (err,s2data)=>{
                  if (err) handleError(err,res);
                  let relLikes= getRelativeLikes(s1data.likes.length,s2data.likes.length);
                  return res.json({stock1:{rel_likes:relLikes.stock1RelLikes,
                    stock:stock1, price:values[0]},
                    stock2:{rel_likes:relLikes.stock2RelLikes,
                    stock:stock2, price:values[1]}});
                })
            })
          })
        }
      }
    });
};


function handleError(error, res){
  return res.status(400).send(error);
}

function getRelativeLikes(stock1Likes,stock2Likes){
  // Calculate relative likes. If stock1 has 7 likes and stock 2 has 2, stock 1
  // will be 5 and stock 2 will be -5.
  let stock1RelLikes, stock2RelLikes;
  stock1RelLikes=stock1Likes-stock2Likes;
  stock2RelLikes=stock2Likes-stock1Likes;
  return {stock1RelLikes,stock2RelLikes}
}
