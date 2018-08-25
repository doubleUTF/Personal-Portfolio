const dns=require('dns');
const mongoose=require('mongoose');
const {ShortURL}=require('./models/short-url');
const randomString=require('randomstring');
const {URL} = require('url')

var urlShortener= (req,res,next)=>{
  let urlString=req.originalUrl.replace(/\/api\/shorturl\/new\//,'')
  let domainReg=/([a-z][a-z0-9+\-.]*:\/\/)?([a-z0-9\-._~%!$&'()*+,;=]+@)?([a-z0-9\-._~%]+|\[[a-z0-9\-._~%!$&'()*+,;=:]+\])/
  let domain=(urlString.match(domainReg)[3])
  // Check if URL is valid
  try {
    new URL(urlString);
  } catch (e){
    return res.json({"error":"invalid URL"});
  }
  dns.lookup(domain,(err,address)=>{
    // Check if valid DNS host
    if (err) return res.json({"error":"invalid URL"})
    // Create a new shortURL obj in DB
    return getUrlStringAndSave(urlString,res);
  })
}

var retrieveUrl=(req,res,next)=>{
  let short=req.params.link;
  ShortURL.findOne({shortUrl:short},(err,shortObj)=>{
    if (err) return res.json(err)
    console.log(shortObj)
    if (!shortObj) return res.json({"error":"Short URL not found."})
    res.redirect(shortObj.originalUrl)
  })
}

function getUrlStringAndSave(url,res){
  // Generate random shortURL
  let shortString=randomString.generate(6);
  // Check if it already exists
  ShortURL.findOne({shortUrl:shortString},(err,shortUrlObj)=>{
    // None found, it's unique
    if (!shortUrlObj){
      let urlObj={originalUrl:url,shortUrl:shortString}
      let newShortUrl=new ShortURL(urlObj)
      newShortUrl.save((err)=>{
        if (err) return res.json(err)
        return res.json(urlObj)
      })
    } else {
      // Existing string found (Rare instance)
      return getUrlStringAndSave(url,res)
    }
  })
}

module.exports={urlShortener,retrieveUrl}
