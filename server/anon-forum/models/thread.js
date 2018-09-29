const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const bcrypt=require('bcryptjs');
const saltRounds=10;

let threadSchema=new Schema({
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
  bumped_on:{
    default:Date.now,
    type:Date
  },
  reported:{
    type:Boolean,
    default:false
  },
  replies:[{type:Schema.Types.ObjectId, ref:'Reply'}],
  board:{
    type:Schema.Types.ObjectId,
    ref:'Board'
  }
})

threadSchema.pre('save', function (next){
  let thread=this;
  bcrypt.genSalt(saltRounds,(err,salt)=>{
    bcrypt.hash(thread.delete_password, salt, (err,hash)=>{
      thread.delete_password=hash;
      next()
    });
  })
})

const Thread=mongoose.model('Thread',threadSchema);

module.exports=Thread;
