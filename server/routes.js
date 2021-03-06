const express = require('express')
const router= express.Router();
const path= require('path');
const {urlShortener,retrieveUrl}=require('./short-url/url-shortener')
const {timestamp,timestamp_dateString} = require('./timestamp')
const {exercise_newUser, exercise_newExercise, exercise_query}= require('./exercise-tracker/exercise-tracker');
const {file_metadata} = require('./file_metadata');
const multer=require('multer');
const upload=multer();
const metric_imp_convert=require('./metric_imp_convert/metric_imp_convert');
const issueTracker=require('./issueTracker/issueTracker');
const personalLibrary=require('./personal-library/personal-library');
const anonForum=require('./anon-forum/anon-forum');
const stockChecker=require('./stock-checker/stock-checker');
const imageSearch=require('./image-search/image_search');

module.exports=(app)=>{
  // Timestamp
  router.get('/timestamp', timestamp)
  .get('/timestamp/:date_string', timestamp_dateString);

  router.get('/whoami',(req,res,next)=>{
    let headers=req.headers;
    if (!headers['accept-language']){
      return res.json({"ipaddress":req.ip,"software":headers['user-agent']})
    }
    res.json({"ipaddress":req.ip,"software":headers['user-agent'],"language":headers['accept-language']})
  })

  // Url Shortener
  router.get(/shorturl\/new\/.+/,urlShortener)
  router.get('/shorturl/:link',retrieveUrl)

  // Exercise Tracker
  router.post('/exercise/new-user',exercise_newUser);
  router.post('/exercise/add',exercise_newExercise);
  router.get('/exercise/log', exercise_query);

  // File Metadata
  router.post('/file_metadata',upload.single('upfile'), file_metadata);

  // Metric Imperial Converter
  metric_imp_convert(app);

  // Issue Tracker
  issueTracker(app);

  // Personal Library
  personalLibrary(app);

  // Anon Forum
  anonForum(app);

  // Stock Checker
  stockChecker(app);

  // Image Search
  imageSearch(app);

  app.use('/api',router);

  // Catch all other routes and return index
  app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname, '../public/index.html'))
  })
}
