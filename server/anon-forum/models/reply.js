const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const bcrypt=require('bcryptjs');
const saltRounds=10;

let replySchema=new Schema({
  delete_password:{
    required:true,
    type:String
  },
  text:{
    required:true,
    type:String
  },
  created_on:{
    default:Date.now,
    type:Date
  },
  reported:{
    type:Boolean,
    default:false
  },
  thread:{
    type:Schema.Types.ObjectId,
    ref:'Thread'
  }
})

replySchema.pre('save', function (next){
  let reply=this;
  bcrypt.genSalt(saltRounds,(err,salt)=>{
    bcrypt.hash(reply.delete_password, salt, (err,hash)=>{
      reply.delete_password=hash;
      next()
    });
  })
})

const Reply=mongoose.model('Reply',replySchema);

module.exports=Reply;
