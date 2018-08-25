require('./config/config.js')
const express = require('express')
const app = express()
const path= require('path');
const router= express.Router()
const bodyParser=require('body-parser');
const {urlShortener,retrieveUrl}=require('./server/url-shortener.js')
const mongoose=require('mongoose');

mongoose.connect(process.env.MONGODB_URI);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
// HTTPS Redirect
app.set('trust proxy', true);

// If dev, don't serve https
if (process.env.NODE_ENV=='production'){
  app.use(function(req, res, next) {
    if (req.secure){
      return next();
    }
    res.redirect("https://www." + req.headers.host + req.url);
  });
}

app.use(express.static('public'))

// APIs
router.get('/timestamp',(req,res,next)=>{
  let date=new Date();
  res.json({"unix":date.getTime(),"utc":date.toUTCString()})
})
.get('/timestamp/:date_string',(req,res,next)=>{
  let dateString=req.params.date_string;
  let date;

  if (/^\d+$/.test(dateString)){
    // Integer in ms
    date=new Date(Number(dateString))
  } else {
    // Date string
    date=new Date(dateString);
  }
  if (date=='Invalid Date'){
    return res.json({"error":"Invalid Date"})
  }
  res.json({"unix":date.getTime(),"utc":date.toUTCString()})
});

router.get('/whoami',(req,res,next)=>{
  let headers=req.headers;
  if (!headers['accept-language']){
    return res.json({"ipaddress":req.ip,"software":headers['user-agent']})
  }
  res.json({"ipaddress":req.ip,"software":headers['user-agent'],"language":headers['accept-language']})
})

router.get(/shorturl\/new\/.+/,urlShortener)
router.get('/shorturl/:link',retrieveUrl)

app.use('/api',router);

// Catch all other routes and return index
app.get('*',(req,res)=>{
  res.sendFile(path.join(__dirname, 'public/index.html'))
})

const PORT= process.env.port || 8080;
app.listen(PORT, () => console.log(`David Lau Portfolio listening on port ${PORT}!`))
