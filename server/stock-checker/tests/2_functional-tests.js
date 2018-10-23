/*
*
*
*       FILL IN EACH FUNCTIONAL TEST BELOW COMPLETELY
*       -----[Keep the tests in the same order!]-----
*       (if additional are added, keep them at the very end!)
*/

var chaiHttp = require('chai-http');
var chai = require('chai');
var assert = chai.assert;
var rootPath= 'http://localhost:3000';
var stockPath= '/api/stock-prices'
const {StockData}= require('../models/stockData');

chai.use(chaiHttp);

suite('Functional Tests', function() {

    before(()=>{
      StockData.remove({}).exec();
    })
    suite('GET /api/stock-prices => stockData object', function() {

      test('1 stock', function(done) {
       chai.request(rootPath)
        .get(stockPath)
        .query({stock: 'goog'})
        .end(function(err, res){
          assert.isNumber(res.body.price)
          assert.equal(res.body.stock,'goog');
          assert.isNumber(res.body.likes);
          done();
        });
      });

      test('1 stock with like', function(done) {
        chai.request(rootPath)
        .get(stockPath)
        .query({stock:'goog',like:true})
        .end((err,res)=>{
          assert.equal(res.body.likes,1)
          assert.equal(res.body.stock,'goog')
          assert.isNumber(res.body.price);
          done();
        })
      });

      test('1 stock with like again (ensure likes arent double counted)', function(done) {
        chai.request(rootPath)
        .get(stockPath)
        .query({stock:'goog',like:true})
        .end((err,res)=>{
          assert.equal(res.body.likes,1)
          assert.equal(res.body.stock,'goog')
          assert.isNumber(res.body.price);
          done();
        })
      });

      test('2 stocks', function(done) {

      });

      test('2 stocks with like', function(done) {

      });

    });

});
