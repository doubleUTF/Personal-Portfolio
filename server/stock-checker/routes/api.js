"use strict";
exports.__esModule = true;
var iex_api_1 = require("iex-api");
var _fetch = require("isomorphic-fetch");
var stockData_1 = require("../models/stockData");
module.exports = function (app) {
    app.route('/api/stock-prices')
        .get(function (req, res) {
        var ip = req.ip;
        var iex = new iex_api_1.IEXClient(_fetch);
        var stock = req.query.stock;
        if (typeof (req.query.stock) == 'string') { // Only 1 stock
            iex.stockPrice(stock).then(function (price) {
                if (price != 'Unknown symbol') { // Checks if stock is valid
                    if (req.query.like) {
                        stockData_1.StockData.findOneAndUpdate({ stock: stock }, { $addToSet: { likes: ip } }, { "new": true, upsert: true, fields: { __v: 0 } }, function (err, data) {
                            if (err)
                                handleError(err, res);
                            res.json({ stock: stock, likes: data.likes.length, price: price });
                        });
                    }
                    else { // No like
                        stockData_1.StockData.findOne({ stock: stock }, { __v: 0 }, function (err, data) {
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
                console.log(stock1_1, stock2_1);
                var promise1 = iex.stockPrice(stock1_1);
                var promise2 = iex.stockPrice(stock2_1);
                Promise.all([promise1, promise2]).then(function (values) {
                    values.forEach(function (value, i) {
                        if (typeof (value) != 'number') {
                            handleError("Invalid stock symbol: " + stock[i], res);
                        }
                    });
                    var updateQuery = req.query.like ? { $addToSet: { likes: ip } } : {};
                    var options = { "new": true, upsert: true, fields: { __v: 0 } };
                    stockData_1.StockData.findOneAndUpdate({ stock: stock1_1 }, updateQuery, options, function (err, s1data) {
                        if (err)
                            handleError(err, res);
                        stockData_1.StockData.findOneAndUpdate({ stock: stock2_1 }, updateQuery, options, function (err, s2data) {
                            if (err)
                                handleError(err, res);
                            var relLikes = getRelativeLikes(s1data.likes.length, s2data.likes.length);
                            return res.json({ stock1: { rel_likes: relLikes.stock1RelLikes,
                                    stock: stock1_1, price: values[0] },
                                stock2: { rel_likes: relLikes.stock2RelLikes,
                                    stock: stock2_1, price: values[1] } });
                        });
                    });
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
    var stock1RelLikes, stock2RelLikes;
    stock1RelLikes = stock1Likes - stock2Likes;
    stock2RelLikes = stock2Likes - stock1Likes;
    return { stock1RelLikes: stock1RelLikes, stock2RelLikes: stock2RelLikes };
}
