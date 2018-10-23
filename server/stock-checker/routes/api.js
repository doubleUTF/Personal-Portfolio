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
            if (req.query.stock.length > 2) {
                return res.status(400).json({ error: 'Too many stock fields' });
            }
            else {
                var promise1 = iex.stockPrice(stock[0]);
                var promise2 = iex.stockPrice(stock[1]);
                Promise.all([promise1, promise2]).then(function (values) {
                    values.forEach(function (value) {
                        if (typeof (value) != 'number') {
                            return res.status(400).json({ error: "Invalid stock symbol: " + value });
                        }
                        // Need to handle two separate stocks here. Maybe do a StockData.findMany method
                    });
                    console.log(values);
                    res.json(values);
                });
            }
        }
        // console.log(req.query)
        // res.send(req.query)
    });
};
function handleError(error, res) {
    return res.status(400).send(error);
}
