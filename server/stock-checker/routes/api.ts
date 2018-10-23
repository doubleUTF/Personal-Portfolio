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
        if (req.query.stock.length>2){
          return res.status(400).json({error:'Too many stock fields'})
        } else {
          let promise1=iex.stockPrice(stock[0])
          let promise2=iex.stockPrice(stock[1])
          Promise.all([promise1,promise2]).then(values=>{
            values.forEach(value=>{
              if (typeof(value)!='number'){
                return res.status(400).json({error:`Invalid stock symbol: ${value}`})
              }
              // Need to handle two separate stocks here. Maybe do a StockData.findMany method
            })
            console.log(values)
            res.json(values)
          })
        }
      }
      // console.log(req.query)
      // res.send(req.query)

    });
};


function handleError(error, res){
  return res.status(400).send(error);
}
