/*
*
*
*       FILL IN EACH FUNCTIONAL TEST BELOW COMPLETELY
*       -----[Keep the tests in the same order!]-----
*
*/

var chaiHttp = require('chai-http');
var chai = require('chai');
var assert = chai.assert;
var ObjectID = require('mongodb').ObjectID;

const url='http://localhost:3000';
const endpoint='/api/books'
chai.use(chaiHttp);

suite('Functional Tests', function() {
  let validId;
  /*
  * ----[EXAMPLE TEST]----
  * Each test should completely test the response of the API end-point including response status code!
  */
  // test('#example Test GET /api/books', function(done){
  //    chai.request(url)
  //     .get(endpoint)
  //     .end(function(err, res){
  //       assert.equal(res.status, 200);
  //       assert.isArray(res.body, 'response should be an array');
  //       assert.property(res.body[0], 'commentcount', 'Books in array should contain commentcount');
  //       assert.property(res.body[0], 'title', 'Books in array should contain title');
  //       assert.property(res.body[0], '_id', 'Books in array should contain _id');
  //       done();
  //     });
  // });
  /*
  * ----[END of EXAMPLE TEST]----
  */

  suite('Routing tests', function() {


    suite('POST /api/books with title => create book object/expect book object', function() {

      test('Test POST /api/books with title', function(done) {
        chai.request(url)
        .post(endpoint)
        .send({
          title:'Why so serious?'
        })
        .end((err,res)=>{
          assert.equal(res.status,200);
          assert.equal(res.body.title,'Why so serious?')
          assert.isTrue(ObjectID.isValid(res.body._id))
          validId=res.body._id;
          done();

        })
      });

      test('Test POST /api/books with no title given', function(done) {
        chai.request(url)
        .post(endpoint)
        .send({})
        .end((err,res)=>{
          assert.equal(res.status,400),
          done();
        })
      });

    });


    suite('GET /api/books => array of books', function(){

      test('Test GET /api/books',  function(done){
        chai.request(url)
         .get(endpoint)
         .end(function(err, res){
           assert.equal(res.status, 200);
           assert.isArray(res.body, 'response should be an array');
           assert.property(res.body[0], 'commentcount', 'Books in array should contain commentcount');
           assert.property(res.body[0], 'title', 'Books in array should contain title');
           assert.property(res.body[0], '_id', 'Books in array should contain _id');
           done();
         });
      });

    });


    suite('GET /api/books/[id] => book object with [id]', function(){

      test('Test GET /api/books/[id] with id not in db',  function(done){
        chai.request(url)
        .get(`${endpoint}/123`)
        .end((err,res)=>{
          assert.equal(res.status,400)
          done();
        })
      });

      test('Test GET /api/books/[id] with valid id in db',  function(done){
        chai.request(url)
        .get(`${endpoint}/${validId}`)
        .end((err,res)=>{
          assert.equal(res.status,200)
          assert.equal(res.body.title,'Why so serious?')
          done();
        })
      });

    });


    suite('POST /api/books/[id] => add comment/expect book object with id', function(){

      test('Test POST /api/books/[id] with comment', function(done){
        let gachiString='AHHHHHHHHHHHHHHHHHHHHH'
        chai.request(url)
        .post(`${endpoint}/${validId}`)
        .send({comment:gachiString})
        .end((err,res)=>{
          assert.equal(res.status,200);
          assert.equal(res.body.comments[0],gachiString)
          assert.equal(res.body._id,validId);
          done();
        })
      });

    });

  });

});
