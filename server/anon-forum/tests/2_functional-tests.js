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
const ObjectId=require('mongodb').ObjectId;
const host='http://localhost:3000';
chai.use(chaiHttp);
const {populateBoard,populateThread, populateReply,threadOneId}=require('./seed');


suite('Functional Tests', function() {
  const endpoint='/api/threads'
  const dBoard='test';
  const dDescription='a test board';
  const dpassword='hahaha';
  let _id;

  before(()=>{
    populateBoard();
    populateThread();
    populateReply();
  })

  suite ('API ROUTING FOR /api/threads',function(){
    test('Get all boards',(done)=>{
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
    let _id

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
            text:'mmm', delete_password:dpassword
          })
          .end((err,res)=>{
            _id=res.body._id;
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
      test('Get threads from test2 board',(done)=>{
        chai.request(host)
        .get(endpoint)
        .end((err,res)=>{
          assert.equal(res.status,200);
          assert.isArray(res.body);
          assert.equal(res.body[0].text,'mmm')
          done();
        })
      })

      test('Get thread from non-existent board',(done)=>{
        chai.request(host)
        .get('/api/threads/thisboardoesntexist')
        .end((err,res)=>{
          assert.equal(res.status,400);
          done();
        })
      })
    });

    suite('PUT', function() {
      test('Report a thread', (done)=>{
        chai.request(host)
        .put(endpoint)
        .send({thread_id:_id})
        .end((err,res)=>{
          assert.equal(res.status,200)
          assert.equal(res.body.message,'success')
          done();
        })
      })
    });

    suite('DELETE', function() {
      test('Incorrectly delete a thread',(done)=>{
        chai.request(host)
        .delete(endpoint)
        .send({_id,delete_password:'wrong password'})
        .end((err,res)=>{
          assert.equal(res.status,400)
          assert.exists(res.body.error)
          done()
        })
      })

      test('Correctly delete a thread',(done)=>{
        chai.request(host)
        .delete(endpoint)
        .send({_id,delete_password:dpassword})
        .end((err,res)=>{
          assert.equal(res.status,200)
          assert.equal(res.body.message,'thread deleted')
          done()
        })
      })
    });
  });

  suite('API ROUTING FOR /api/replies', function() {
    const replyEndpoint='/api/replies';

    suite('GET', function() {
      let reply_id;
      test('Get replies from threadoneID',(done)=>{
        chai.request(host)
        .get(replyEndpoint)
        .query({thread_id:threadOneId.toString()})
        .end((err,res)=>{
          assert.equal(res.status,200);
          assert.isNotEmpty(res.body.replies)
          done();
        })
      })

      test('Get replies from non-existent thread',(done)=>{
          chai.request(host)
          .get(replyEndpoint)
          .query({thread_id:new ObjectId().toString()})
          .end((err,res)=>{
            assert.equal(res.status,400)
            done();
          })
      })
    });

    suite('POST', function() {
      test('Add a reply to threadOneId', (done)=>{
        chai.request(host)
        .post(replyEndpoint)
        .send({text:'ahh',delete_password:'a',thread_id:threadOneId.toString()})
        .end((err,res)=>{
          reply_id=res.body._id
          assert.equal(res.status,200)
          assert.exists(res.body._id)
          done();
        })
      })

    });
    suite('PUT', function() {
      test('Make a reply report property to true',(done)=>{
        chai.request(host)
        .put(replyEndpoint)
        .send({reply_id})
        .end((err,res)=>{
          assert.equal(res.status,200)
          assert.equal(res.body.message,'success')
          done()
        })
      })
    });

    suite('DELETE', function() {
      test('Delete a reply to threadOneId',(done)=>{
        chai.request(host)
        .delete(replyEndpoint)
        .send({reply_id,delete_password:'a'})
        .end((err,res)=>{
          assert.equal(res.status,200);
          assert.equal(res.body.message,'success');
          done()
        })
      })
    });

  });

});
