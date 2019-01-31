'use strict';
var https = require('https');
var querystring = require('querystring');
var mysql = require('mysql');
var imageSearch = function (app) {
    app.route('/api/image-search')
        .get(function (req, res) {
        var googURL = 'https://www.googleapis.com/customsearch/v1';
        var cx = '013439926645284855395:pscgjpfr23e';
        var searchQuery = req.query.q;
        var qString = querystring.stringify({ q: searchQuery, cx: cx, key: process.env.GOOGLE_CSE_API_KEY });
        var URL = googURL + '?' + qString;
        // https.get(URL,(response)=>{
        //   let body='';
        //   response.on('data',(data)=>{
        //     body+=data;
        //   })
        //   response.on('end',()=>{
        //     const parsedData= JSON.parse(body);
        //     res.json(parsedData)
        //   })
        // })
        var connection = mysql.createConnection({
            host: process.env.MYSQL_HOST,
            user: process.env.MYSQL_USER,
            password: process.env.MYSQL_PASSWORD,
            database: process.env.MYSQL_USER
        });
        connection.connect();
        connection.query("INSERT INTO ImageSearch VALUES (" + connection.escape(searchQuery) + ",\n      '" + new Date().toISOString().slice(0, 19) + "')", function (error, results, fields) {
            if (error) {
                res.json(error);
                throw error;
            }
            ;
            res.json(results);
        });
        connection.end();
    });
    app.route('/api/image-search/latest')
        .get(function (req, res) {
    });
};
module.exports = imageSearch;
