/*
*
*
*       Complete the API routing below
*
*
*/

'use strict';

var expect = require('chai').expect;
const Board=require('../models/board');
const bcrypt=require('bcryptjs');
const Thread=require('../models/thread');

module.exports = function (app) {
  app.route('/api/threads')
    .get((req,res)=>{
      Board.find({},{delete_password:0},(err,data)=>{
        if (err) return res.status(400).send(err);
        res.json(data);
      })
    })
    .post((req,res)=>{
      new Board({title:req.body.title,
        description:req.body.description,
        delete_password:req.body.delete_password,
        _id:req.body._id
      }).save((err,data)=>{
        if (err) return res.status(400).send(err);
        res.json({message:'new board saved',data})
      })
    })
    .delete((req,res)=>{
      Board.findById(req.body._id,(err,board)=>{
        if (err) return res.status(400).send(err);
        if (!board) return res.status(400).json({error:'no board found'})
        bcrypt.compare(req.body.delete_password,board.delete_password,(err,result)=>{
          if (!result) return res.status(400).json({error:'incorrect password'})
          Board.findByIdAndDelete(req.body._id,(err)=>{
            if (err) return res.status(400).send(err);
            res.json({message:`${board.title} deleted`})
          })
        })
      })
    })

  app.route('/api/threads/:board')
    .get((req,res)=>{
      Board.findOne({title:req.params.board},{delete_password:0},(err,board)=>{
        if (err) return res.status(400).send(err);
        if (!board) return res.status(400).json({error:'no board found'})
        Thread.find({board:board._id}, {delete_password:0,__v:0},(err,threads)=>{
          if (err) return res.status(400).send(err);
          res.json(threads);
        })
      })
    })
    .post((req,res)=>{
      Board.findOne({title:req.params.board},{delete_password:0},(err,board)=>{
        if (err) return res.status(400).send(err);
        if (!board) return res.status(400).json({error:'board not found'})
        new Thread({text:req.body.text, created_on: req.body.created_on,
          bumped_on:req.body.bumped_on, delete_password:req.body.delete_password,
          board:board._id}).save((err,data)=>{
            if (err) return res.status(400).send(err);
            res.json(data);
        })
      })
    })
    .delete((req,res)=>{
      Thread.findById(req.body._id,(err,thread)=>{
        if (err) return res.status(400).send(err);
        if (!thread) return res.status(400).json({error:'thread not found'});
        bcrypt.compare(req.body.delete_password,thread.delete_password,(err,result)=>{
          if (!result) return res.status(400).json({error:'incorrect password'})
          Thread.findByIdAndDelete(req.body._id,(err)=>{
            if (err) return res.status(400).send(err);
            res.json({message:'thread deleted'})
          })
        })
      })
    })
    .put((req,res)=>{
      Thread.findByIdAndUpdate(req.body._id,{reported:true,bumped_on:new Date()},(err)=>{
        if (err) return res.status(400).send(err);
        res.json({message:'success'})
      })
    })

  app.route('/api/replies/:board');

};
