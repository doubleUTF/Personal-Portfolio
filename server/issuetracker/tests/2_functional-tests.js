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
var server = 'http://localhost:3000';
var endpoint='/api/issues/test'
var {Issue} =require('../issue.model');
var ObjectId = require('mongodb').ObjectID;
chai.use(require('chai-datetime'));
chai.use(chaiHttp);

suite('Functional Tests', function() {
    let _id;
    suite('POST /api/issues/{project} => object with issue data', function() {

      test('Every field filled in', function(done) {
       chai.request(server)
        .post(endpoint)
        .send({
          issue_title: 'Title',
          issue_text: 'text',
          created_by: 'Functional Test - Every field filled in',
          assigned_to: 'Chai and Mocha',
          status_text: 'In QA'
        })
        .end(function(err, res){
          _id=res.body._id;
          assert.equal(res.status, 200);
          assert.equal(res.body.issue_title,'Title');
          assert.equal(res.body.issue_text,'text');
          assert.equal(res.body.created_by,'Functional Test - Every field filled in');
          assert.equal(res.body.assigned_to,'Chai and Mocha');
          assert.equal(res.body.status_text,'In QA');
          done();
        });
      });

      test('Required fields filled in', function(done) {
        let issue_title='Need more cowbell';
        let issue_text='We gotta have more cowbell!';
        let created_by='Bruce Dickenson'
        chai.request(server)
         .post(endpoint)
         .send({
           issue_title,
           issue_text,
           created_by
         })
         .end((err,res)=>{
           assert.equal(res.status,200);
           assert.equal(res.body.issue_title,issue_title);
           assert.equal(res.body.created_by,created_by);
           assert.equal(res.body.issue_text,issue_text)
           done();
         })
      });

      test('Missing required fields', function(done) {
        chai.request(server)
         .post(endpoint)
         .send({})
         .end((err,res)=>{
           assert.equal(res.status,400);
           assert.exists(res.body.error)
           done();
         })
      });

    });

    suite('PUT /api/issues/{project} => text', function() {

      test('No body', function(done) {
      chai.request(server)
       .put(endpoint)
       .send({})
       .end((err,res)=>{
         assert.equal(res.status,400);
         assert.equal(res.body.error,'no updated field sent')
         done();
       })
      });

      test('One field to update', function(done) {
        Issue.findOne({_id,project:'test'},(err,issue)=>{
          if (err || !issue) {
            assert.fail()
            done()
          };
          let oldTime=issue.updated_on;
          assert.equal(issue.created_by,'Functional Test - Every field filled in');
          chai.request(server)
           .put(endpoint)
           .send({created_by:'LIL JON',_id})
           .end((err,res)=>{
             Issue.findOne({_id,project:'test'},(err,updatedIssue)=>{
               assert.equal(updatedIssue.created_by,'LIL JON');
               assert.afterTime(updatedIssue.updated_on,oldTime);
               done();
             })
           })
        })
      });

      test('Multiple fields to update', function(done) {
        Issue.findOne({_id,project:'test'},(err,issue)=>{
          if (err || !issue) {
            assert.fail()
            done()
          };
          let oldTime=issue.updated_on;
          assert.equal(issue.created_by,'LIL JON');
          let new_assigned_to='The One and Only';
          let new_status='Issue fixed!';
          let open=false;
          chai.request(server)
           .put(endpoint)
           .send({assigned_to:new_assigned_to,status_text:new_status,open,_id})
           .end((err,res)=>{
             Issue.findOne({_id,project:'test'},(err,updatedIssue)=>{
               assert.equal(updatedIssue.assigned_to,new_assigned_to);
               assert.equal(updatedIssue.status_text,new_status);
               assert.equal(updatedIssue.open,false);
               assert.afterTime(updatedIssue.updated_on,oldTime);
               done();
             })
           })
        })
      });
    });

    suite('GET /api/issues/{project} => Array of objects with issue data', function() {

      test('No filter', function(done) {
        chai.request(server)
        .get('/api/issues/test')
        .query({})
        .end(function(err, res){
          assert.equal(res.status, 200);
          assert.isArray(res.body);
          assert.property(res.body[0], 'issue_title');
          assert.property(res.body[0], 'issue_text');
          assert.property(res.body[0], 'created_on');
          assert.property(res.body[0], 'updated_on');
          assert.property(res.body[0], 'created_by');
          assert.property(res.body[0], 'assigned_to');
          assert.property(res.body[0], 'open');
          assert.property(res.body[0], 'status_text');
          assert.property(res.body[0], '_id');
          done();
        });
      });

      test('One filter', function(done) {
        chai.request(server)
        .get(endpoint)
        .query({created_by:'LIL JON'})
        .end((err,res)=>{
          assert.equal(res.status,200);
          assert.isArray(res.body);
          assert.property(res.body[0], 'issue_title');
          assert.property(res.body[0], 'issue_text');
          assert.property(res.body[0], 'created_on');
          assert.property(res.body[0], 'updated_on');
          assert.property(res.body[0], 'created_by');
          assert.property(res.body[0], 'assigned_to');
          assert.property(res.body[0], 'open');
          assert.property(res.body[0], 'status_text');
          assert.property(res.body[0], '_id');
          done();
        })
      });

      test('Multiple filters (test for multiple fields you know will be in the db for a return)', function(done) {
        chai.request(server)
        .get(endpoint)
        .query({created_by:'Bruce Dickenson', issue_title:'Need more cowbell',
        issue_text:'We gotta have more cowbell!', open:true})
        .end((err,res)=>{
          assert.equal(res.status,200);
          assert.isArray(res.body);
          assert.property(res.body[0], 'issue_title');
          assert.property(res.body[0], 'issue_text');
          assert.property(res.body[0], 'created_on');
          assert.property(res.body[0], 'updated_on');
          assert.property(res.body[0], 'created_by');
          assert.property(res.body[0], 'assigned_to');
          assert.property(res.body[0], 'open');
          assert.property(res.body[0], 'status_text');
          assert.property(res.body[0], '_id');
          done();
        })
      });

    });

    suite('DELETE /api/issues/{project} => text', function() {

      test('No _id', function(done) {
        chai.request(server)
        .delete(endpoint)
        .query({})
        .end((err,res)=>{
          assert.equal(res.status,400);
          assert.equal(res.body.error,'_id error');
          done()
        })
      });

      test('Valid _id', function(done) {
        chai.request(server)
        .delete(endpoint)
        .query({_id})
        .end((err,res)=>{
          assert.equal(res.status,200);
          assert.equal(res.body.message,`success: deleted ${_id}`);
          done()
        })
      });

    });

});
