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
const host='http://localhost:3000';
chai.use(chaiHttp);
const Thread=require('../models/thread')
const Board=require('../models/board');


suite('Functional Tests', function() {
  const endpoint='/api/threads'
  const dBoard='test';
  const dDescription='a test board';
  const dpassword='hahaha';
  let _id;

  before(()=>{
    Thread.remove({}).exec()
    Board.remove({}).exec()
  })

  suite ('API ROUTING FOR /api/threads',function(){
    test ('GET',(done)=>{
      chai.request(host)
      .get(endpoint)
      .end((err,res)=>{
        assert.isArray(res.body,'Result is array')
        assert.equal(res.status,200, 'Response 200')
        done();
      })
    });

    test('POST', (done)=>{
      chai.request(host)
      .post(endpoint)
      .send({title:dBoard,description:dDescription,
        delete_password:dpassword})
      .end((err,res)=>{
        _id=res.body.data._id;
        assert.equal(res.status,200);
        assert.equal(res.body.message,'new board saved')
        assert.equal(res.body.data.title,dBoard)
        assert.equal(res.body.data.description,dDescription)
        done();
      })
    })

    test('DELETE', (done)=>{
      chai.request(host)
      .delete(endpoint)
      .send({_id,delete_password:dpassword})
      .end((err,res)=>{
        assert.equal(res.status,200);
        assert.exists(res.body.message);
        done();
      })
    })
  })

  suite('API ROUTING FOR /api/threads/:board', function() {
    const endpoint='/api/threads/test2';
    const dBoard='test2';
    const dDescription='a test board';
    const dpassword='hahaha';


    suite('POST', function() {
      test('Correctly add a thread to test2 board',(done)=>{
        chai.request(host)
        .post('/api/threads')
        .send({title:dBoard,description:dDescription,
          delete_password:dpassword})
        .end((err,res)=>{
          chai.request(host)
          .post(endpoint)
          .send({
            text:'mmm', delete_password:'a'
          })
          .end((err,res)=>{
            assert.equal(res.status,200);
            assert.equal(res.body.text,'mmm');
            done();
          })
        })
      })

      test('Incorrectly add a thread to test2 board',(done)=>{
        chai.request(host)
        .post(endpoint)
        .send({
          text:'aasd',
        }).end((err,res)=>{
          assert.equal(res.status,400)
          done();
        })
      })
    });

    suite('GET', function() {

    });

    suite('DELETE', function() {

    });

    suite('PUT', function() {

    });


  });

  suite('API ROUTING FOR /api/replies/:board', function() {

    suite('POST', function() {

    });

    suite('GET', function() {

    });

    suite('PUT', function() {

    });

    suite('DELETE', function() {

    });

  });

});
