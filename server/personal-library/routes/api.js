/*
*
*
*       Complete the API routing below
*
*
*/

'use strict';

var expect = require('chai').expect;
var ObjectId = require('mongodb').ObjectId;
var Book= require('./book.model');

//Example connection: MongoClient.connect(MONGODB_CONNECTION_STRING, function(err, db) {});

module.exports = function (app) {

  app.route('/api/books')
    .get(function (req, res){
      Book.aggregate([{$project:{title:1,commentcount:{$size:'$comments'}}}],(err,docs)=>{
        if (err) return res.status(400).json({error:err})
        res.json(docs)
      })
      //response will be array of book objects
      //json res format: [{"_id": bookid, "title": book_title, "commentcount": num_of_comments },...]
    })

    .post(function (req, res){
      var title = req.body.title;
      new Book({title}).save((err,book)=>{
        if (err) return res.status(400).json(err);
        res.json(book)
      })
      //response will contain new book object including atleast _id and title
    })

    .delete(function(req, res){
      Book.deleteMany({},(err)=>{
        if (err) return res.status(400).send(err);
        res.json({message:'complete delete successful'})
      })
      //if successful response will be 'complete delete successful'
    });



  app.route('/api/books/:id')
    .get(function (req, res){
      var bookid = req.params.id;
      Book.findById(bookid,{__v:0},(err,book)=>{
        if (err) return res.status(400).send(err)
        if (!book) return res.status(400).json({error:'no book exists'})
        res.json(book);
      })
      //json res format: {"_id": bookid, "title": book_title, "comments": [comment,comment,...]}
    })

    .post(function(req, res){
      var bookid = req.params.id;
      var comment = req.body.comment;
      Book.findOneAndUpdate({_id:bookid},{$push:{comments:comment}},{new:true},(err,book)=>{
        if (err) return res.status(400).send(err)
        res.json(book);
      })
      //json res format same as .get
    })

    .delete(function(req, res){
      var bookid = req.params.id;
      Book.findByIdAndRemove(bookid,(err)=>{
        if (err) return res.status(400).send(err);
        res.json({message:'delete successful'})
      })
      //if successful response will be 'delete successful'
    });

};
