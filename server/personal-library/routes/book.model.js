const mongoose=require('mongoose');
const Schema=mongoose.Schema;

let bookSchema=new Schema({
  title:{
    type:String,
    required:true
  },
  comments:[String]
})

let Book= mongoose.model('Book', bookSchema);
module.exports=Book;
