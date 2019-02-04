'use strict';
var https = require('https');
var querystring = require('querystring');
var mysql = require('mysql');
var connectionObject = {
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_USER
};
var imageSearch = function (app) {
    app.route('/api/image-search')
        .get(function (req, res) {
        var googURL = 'https://www.googleapis.com/customsearch/v1';
        var cx = '013439926645284855395:pscgjpfr23e';
        var searchQuery = req.query.q;
        var offset = req.query.offset ? req.query.offset : 1;
        var qString = querystring.stringify({ q: searchQuery, cx: cx, key: process.env.GOOGLE_CSE_API_KEY, start: offset });
        var URL = googURL + '?' + qString;
        https.get(URL, function (response) {
            var body = '';
            response.on('data', function (data) {
                body += data;
            });
            response.on('end', function () {
                var parsedData = JSON.parse(body);
                var transformed = extractGCE(parsedData);
                res.json(transformed);
            });
        });
        var connection = mysql.createConnection(connectionObject);
        connection.connect();
        connection.query("INSERT INTO ImageSearch VALUES (" + connection.escape(searchQuery) + ",\n      '" + new Date().toISOString().slice(0, 19) + "')", function (error, results, fields) {
            if (error) {
                res.json(error);
            }
            ;
        });
        connection.end();
    });
    app.route('/api/image-search/latest')
        .get(function (req, res) {
        var connection = mysql.createConnection(connectionObject);
        connection.connect();
        connection.query("select * from ImageSearch order by 'timestamp' desc LIMIT 10", function (error, results, fields) {
            if (error) {
                res.json(error);
            }
            ;
            res.json(results);
        });
        connection.end();
    });
};
function extractGCE(json) {
    var result = json.items.map(function (obj) {
        var imgSrc = obj.pagemap ? (obj.pagemap.cse_image ? obj.pagemap.cse_image[0].src : null) : null;
        var thumbnail = obj.pagemap ? (obj.pagemap.cse_thumbnail ? obj.pagemap.cse_thumbnail[0].src : null) : null;
        var context = obj.title ? obj.title : 'none';
        return { imgSrc: imgSrc, thumbnail: thumbnail, context: context };
    });
    return result;
}
module.exports = imageSearch;
