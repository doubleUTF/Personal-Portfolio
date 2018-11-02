import { IEXClient } from 'iex-api';
import * as _fetch from 'isomorphic-fetch';
import { StockData } from '../models/stockData';
module.exports = function (app) {
    app.route('/api/stock-prices')
        .get(function (req, res) {
        var ip = req.ip;
        var iex = new IEXClient(_fetch);
        var stock = req.query.stock;
        if (typeof (req.query.stock) == 'string') { // Only 1 stock
            iex.stockPrice(stock).then(function (price) {
                if (price != 'Unknown symbol') { // Checks if stock is valid
                    if (req.query.like) {
                        StockData.findOneAndUpdate({ stock: stock }, { $addToSet: { likes: ip } }, { new: true, upsert: true, fields: { __v: 0 } }, function (err, data) {
                            if (err)
                                handleError(err, res);
                            res.json({ stock: stock, likes: data.likes.length, price: price });
                        });
                    }
                    else { // No like
                        StockData.findOne({ stock: stock }, { __v: 0 }, function (err, data) {
                            if (err)
                                handleError(err, res);
                            if (!data) {
                                return res.json({ stock: stock, price: price, likes: 0 });
                            }
                            else {
                                res.json({ stock: stock, price: price, likes: data.likes.length });
                            }
                        });
                    }
                }
                else {
                    handleError('Invalid stock ticker', res);
                }
            });
        }
        else if (typeof (req.query.stock == 'array')) {
            if (req.query.stock.length != 2) {
                handleError('Too many fields', res);
            }
            else {
                var stock1_1 = stock[0];
                var stock2_1 = stock[1];
                var promise1 = iex.stockPrice(stock1_1);
                var promise2 = iex.stockPrice(stock2_1);
                Promise.all([promise1, promise2]).then(function (values) {
                    values.forEach(function (value, i) {
                        if (typeof (value) != 'number') {
                            throw Error("Invalid stock symbol: " + stock[i]);
                        }
                    });
                    var updateQuery = req.query.like ? { $addToSet: { likes: ip } } : {};
                    var options = { new: true, upsert: true, fields: { __v: 0 } };
                    StockData.findOneAndUpdate({ stock: stock1_1 }, updateQuery, options, function (err, s1data) {
                        if (err)
                            handleError(err, res);
                        StockData.findOneAndUpdate({ stock: stock2_1 }, updateQuery, options, function (err, s2data) {
                            if (err) {
                                handleError(err, res);
                                console.log('error found');
                            }
                            ;
                            var relLikes = getRelativeLikes(s1data.likes.length, s2data.likes.length);
                            return res.json({ stock1: { rel_likes: relLikes.stock1RelLikes,
                                    stock: stock1_1, price: values[0] },
                                stock2: { rel_likes: relLikes.stock2RelLikes,
                                    stock: stock2_1, price: values[1] } });
                        });
                    });
                }).catch(function (err) {
                    console.log(err);
                    handleError(err, res);
                });
            }
        }
    });
};
function handleError(error, res) {
    return res.status(400).send(error);
}
function getRelativeLikes(stock1Likes, stock2Likes) {
    // Calculate relative likes. If stock1 has 7 likes and stock 2 has 2, stock 1
    // will be 5 and stock 2 will be -5.
    // TESSSSSSSSSSSST
    var stock1RelLikes, stock2RelLikes;
    stock1RelLikes = stock1Likes - stock2Likes;
    stock2RelLikes = stock2Likes - stock1Likes;
    return { stock1RelLikes: stock1RelLikes, stock2RelLikes: stock2RelLikes };
}
//# sourceMappingURL=api.js.map