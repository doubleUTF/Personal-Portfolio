'use strict';
var https = require('https');
var querystring = require('querystring');
var imageSearch = function (app) {
    app.route('/api/image-search')
        .get(function (req, res) {
        var googURL = 'https://www.googleapis.com/customsearch/v1';
        var cx = '013439926645284855395:pscgjpfr23e';
        var searchQuery = req.query.q;
        var qString = querystring.stringify({ q: searchQuery, cx: cx, key: process.env.GOOGLE_CSE_API_KEY });
        var URL = googURL + '?' + qString;
        console.log(URL);
        https.get(URL, function (response) {
            var body = '';
            response.on('data', function (data) {
                body += data;
            });
            response.on('end', function () {
                var parsedData = JSON.parse(body);
                res.json(parsedData);
            });
        });
    });
    app.route('/api/image-search/latest')
        .get(function (req, res) {
    });
};
module.exports = imageSearch;
