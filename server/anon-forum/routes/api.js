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
const ObjectId=require('mongodb').ObjectId;
const Reply=require('../models/reply');

module.exports = function (app) {
  app.route('/api/threads')
    .get((req,res)=>{
      Board.find({},{delete_password:0,__v:0},(err,data)=>{
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
      Board.findOne({title:req.params.board},{delete_password:0})
      .exec((err,board)=>{
        if (err) return res.status(400).send(err);
        if (!board) return res.status(400).json({error:'no board found'})
        Thread.find({board:board._id}, {delete_password:0,__v:0},{limit:10})
        .sort({bumped_on:-1})
        .populate({path:'replies',select:['text','created_on'],
      options:{sort:{created_on:-1}, limit:3}})
        .exec((err,threads)=>{
          if (err) return res.status(400).send(err);
          res.json(threads);
        })
      })
    })
    .post((req,res)=>{
      Board.findOne({title:req.params.board},{delete_password:0},(err,board)=>{
        if (err) return res.status(400).send(err);
        if (!board) return res.status(400).json({error:'board not found'})
        new Thread({text:req.body.text, delete_password:req.body.delete_password,
          board:board._id}).save((err,threadData)=>{
            if (err) return res.status(400).send(err);
            board.bumped_on=new Date();
            board.save((err,data)=>{
              if (err) return res.status(400).send(err)
              res.json(threadData);
            })
        })
      })
    })
    .delete((req,res)=>{
      Thread.findById(req.body._id,(err,thread)=>{
        if (err) return res.status(400).send(err);
        if (!thread) return res.status(400).json({error:'thread not found'});
        bcrypt.compare(req.body.delete_password,thread.delete_password,(err,result)=>{
          if (!result) return res.status(400).json({error:'incorrect password'})
            Reply.deleteMany({_id:{$in:thread.replies}},(err,response)=>{
              if (err) handleError(err,res);
              Thread.findByIdAndDelete(req.body._id,(err)=>{
                if (err) return res.status(400).send(err);
                res.json({message:'thread deleted'});
            })
          })
        })
      })
    })
    .put((req,res)=>{
      Thread.findByIdAndUpdate(req.body.thread_id,{reported:true},(err)=>{
        if (err) return res.status(400).send(err);
        res.json({message:'success'})
      })
    })

  app.route('/api/replies')
    .get((req,res)=>{
      let threadId=req.query.thread_id;
      Thread.findById(threadId,{delete_password:0})
      .populate({path:'replies',sort:{created_on:-1},
      select:['text','created_on']})
      .exec((err,thread)=>{
        if (err) handleError(err,res);
        if (!thread) return res.status(400).json({error:'thread not found'})
        res.json(thread);
      })
    })
   .post((req,res)=>{
      Reply.create({text:req.body.text, thread:req.body.thread_id,
      delete_password:req.body.delete_password}).then((reply)=>{
        let newDate=new Date()
        Thread.findByIdAndUpdate(reply.thread,{$addToSet:{replies:reply},
          bumped_on:newDate},(err,thread)=>{
          if (err) handleError(err,res);
          if (!thread) return res.status(400).json({error:'no thread found'})
          Board.findByIdAndUpdate(thread.board,{bumped_on:newDate},(err,board)=>{
            if (err) handleError(err,res)
            res.json(reply)
          })
        })
      }).catch(err=>handleError(err,res))
   })
   .put((req,res)=>{
     Reply.findByIdAndUpdate(req.body.reply_id, {reported:true},(err,reply)=>{
       if (err) handleError(err,res);
       if (!reply) return res.status(400).json({error:'reply not found'})
       res.json({message:'success'})
     })
   })
   .delete((req,res)=>{
     Reply.findById(req.body.reply_id,(err,reply)=>{
       if (err) handleError(err,res);
       if (!reply) return res.status(400).json({error:'reply id not found'});
       bcrypt.compare(req.body.delete_password,reply.delete_password, (err,result)=>{
         if (!result) return res.status(400).json({error:'incorrect password'});
         Thread.findByIdAndUpdate(reply.thread,{$pull:{replies:reply._id}},(err,thread)=>{
           if (err) handleError(err,res);
           if (!thread) res.status(400).json({error:'thread not found'});
           Reply.findByIdAndDelete(reply._id,(err,result)=>{
             if (err) handleError(err,res);
             res.json({message:'success'})
           })
         })
       })
     })
   })
  ;

};

function handleError(error, res){
  return res.status(400).send(error);
}
