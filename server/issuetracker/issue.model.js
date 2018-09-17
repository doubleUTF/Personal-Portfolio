const mongoose=require('mongoose');
const Schema=mongoose.Schema;

let issueSchema=new Schema({
  project:{
    type:String,
    required:true
  },
  issue_title:{
    type:String,
    required:true
  },
  issue_text:{
    type:String,
    required:true
  },
  created_by:{
    type:String,
    required:true
  },
  assigned_to:{
    type:String,
    default:''
  },
  status_text:{
    type:String,
    default:''
  },
  created_on:{
    default:Date.now,
    type:Date
  },
  updated_on:{
    default:Date.now,
    type:Date
  },
  open:{
    default:true,
    type:Boolean
  }
})

let Issue=mongoose.model('Issue',issueSchema);

module.exports={Issue}
