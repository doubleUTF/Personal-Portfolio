const mongoose=require('mongoose');

const ShortURLSchema=new mongoose.Schema({
  originalUrl:String,
  shortUrl:String,
  createdAt:{
    type: Date,
    default:Date.now
  }
}).index({"createdAt":1},{expires:"1d"})

const ShortURL=mongoose.model('shortURL',ShortURLSchema)
module.exports={ShortURL}
