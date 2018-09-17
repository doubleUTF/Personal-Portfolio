/*
*
*
*       Complete the API routing below
*
*
*/

'use strict';

var expect = require('chai').expect;
var ObjectId = require('mongodb').ObjectID;
const {Issue}=require('../issue.model');

module.exports = function (app) {

  app.route('/api/issues/:project')

    .get(function (req, res){
      var project = req.params.project;
      let queryOptions={project}
      Object.keys(req.query).forEach((key)=>{
        queryOptions[key]=req.query[key]
      })
      Issue.find(queryOptions,(err,data)=>{
        if (err) return res.status(400).json({error:err.message})
        res.json(data)
      })
    })

    .post(function (req, res){
      var project = req.params.project;
      let issue= new Issue({
        project:project,
        issue_title:req.body.issue_title,
        issue_text:req.body.issue_text,
        created_by:req.body.created_by,
        assigned_to:req.body.assigned_to,
        status_text:req.body.status_text
      })

      issue.save((err,data)=>{
        if (err) return res.status(400).json({error:err.message});
        res.json(data)
      })
    })

    .put(function (req, res){
      var project = req.params.project;
      if (Object.keys(req.body).length<1) return res.status(400).json({error:'no updated field sent'})
      Issue.findOne({_id:ObjectId(req.body._id), project},(err,issue)=>{
        if (err || !issue) return res.status(400).json({error:`Could not update issue with id ${req.body._id} and project name:${project}`})
        Object.keys(req.body).forEach((key)=>{
          issue[key]=req.body[key];
        })
        issue.updated_on=new Date();
        issue.save((err,updatedIssue)=>{
          if (err) return res.status(400).json({error, message:`Could not update ${req.body._id}`})
          res.json({message:'successfully updated'})
        })
      })
    })

    .delete(function (req, res){
      var project = req.params.project;
      if (!req.query._id) return res.status(400).json({error:'_id error'})
      Issue.deleteOne({_id:ObjectId(req.query._id),project},(err)=>{
        if (err) return res.status(400).json({error:`could not delete ${req.query._id}`})
        res.json({message:`success: deleted ${req.query._id}`})
      })
    });

};
