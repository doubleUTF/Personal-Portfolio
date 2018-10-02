const bcrypt=require('bcryptjs')
const Board= require('../models/board');
const Reply= require('../models/reply');
const Thread= require('../models/thread');
const loremIpsum = require('lorem-ipsum');
const ObjectId=require('mongodb').ObjectId;

const boardId=new ObjectId();
const threadOneId=new ObjectId();
const threadTwoId=new ObjectId();
const threadThreeId=new ObjectId();
const threadFourId=new ObjectId();
const threadFiveId=new ObjectId();
const threadSixId=new ObjectId();
const threadSevenId=new ObjectId();
const threadEightId=new ObjectId();
const threadNineId=new ObjectId();
const threadTenId=new ObjectId();
const threadElevenId=new ObjectId();

const reply1Id=new ObjectId();
const reply2Id=new ObjectId();
const reply3Id=new ObjectId();
const reply4Id=new ObjectId();

const salt=bcrypt.genSaltSync(10);
const delete_password=bcrypt.hashSync('a',salt)
const threads=[
  {
    text:loremIpsum({count:Math.random()*10,units:'sentences'}),
    delete_password,
    created_on:new Date().setFullYear(2000),
    bumped_on:new Date().setFullYear(2018),
    reported:false,
    _id:threadOneId,
    board:boardId,
    replies:[reply1Id,reply2Id,reply3Id,reply4Id]
},{
  text:loremIpsum({count:Math.random()*10,units:'sentences'}),
  delete_password,
  created_on:new Date().setFullYear(2001),
  bumped_on:new Date().setFullYear(2001),
  reported:true,
  _id:threadTwoId,
  board:boardId,
},{
  text:loremIpsum({count:Math.random()*10,units:'sentences'}),
  delete_password,
  created_on:new Date().setFullYear(2002),
  bumped_on:new Date().setFullYear(2002),
  reported:false,
  _id:threadThreeId,
  board:boardId,
},{
  text:loremIpsum({count:Math.random()*10,units:'sentences'}),
  delete_password,
  created_on:new Date().setFullYear(2003),
  bumped_on:new Date().setFullYear(2003),
  reported:false,
  _id:threadFourId,
  board:boardId,
},{
  text:loremIpsum({count:Math.random()*10,units:'sentences'}),
  delete_password,
  created_on:new Date().setFullYear(2004),
  bumped_on:new Date().setFullYear(2004),
  reported:true,
  _id:threadFiveId,
  board:boardId,
},{
  text:loremIpsum({count:Math.random()*10,units:'sentences'}),
  delete_password,
  created_on:new Date().setFullYear(2005),
  bumped_on:new Date().setFullYear(2005),
  reported:true,
  _id:threadSixId,
  board:boardId,
},{
  text:loremIpsum({count:Math.random()*10,units:'sentences'}),
  delete_password,
  created_on:new Date().setFullYear(2006),
  bumped_on:new Date().setFullYear(2006),
  reported:false,
  _id:threadSevenId,
  board:boardId,
},{
  text:loremIpsum({count:Math.random()*10,units:'sentences'}),
  delete_password,
  created_on:new Date().setFullYear(2007),
  bumped_on:new Date().setFullYear(2007),
  reported:true,
  _id:threadEightId,
  board:boardId,
},{
  text:loremIpsum({count:Math.random()*10,units:'sentences'}),
  delete_password,
  created_on:new Date().setFullYear(2008),
  bumped_on:new Date().setFullYear(2008),
  reported:true,
  _id:threadNineId,
  board:boardId,
},{
  text:loremIpsum({count:Math.random()*10,units:'sentences'}),
  delete_password,
  created_on:new Date().setFullYear(2009),
  bumped_on:new Date().setFullYear(2009),
  reported:false,
  _id:threadTenId,
  board:boardId,
},{
  text:loremIpsum({count:Math.random()*10,units:'sentences'}),
  delete_password,
  created_on:new Date().setFullYear(2010),
  bumped_on:new Date().setFullYear(2010),
  reported:false,
  _id:threadElevenId,
  board:boardId,
},
]

const replies=[
  {
    text:loremIpsum({count:Math.random()*10,units:'sentences'}),
    delete_password,
    created_on:new Date().setFullYear(2018),
    reported:false,
    thread:threadOneId,
    _id:reply1Id
  },
  {
    text:loremIpsum({count:Math.random()*10,units:'sentences'}),
    delete_password,
    created_on:new Date().setFullYear(2017),
    reported:false,
    thread:threadOneId,
    _id:reply2Id
  },{
    text:loremIpsum({count:Math.random()*10,units:'sentences'}),
    delete_password,
    created_on:new Date().setFullYear(2016),
    reported:true,
    thread:threadOneId,
    _id:reply3Id
  },{
    text:loremIpsum({count:Math.random()*10,units:'sentences'}),
    delete_password,
    created_on:new Date().setFullYear(2015),
    reported:false,
    thread:threadOneId,
    _id:reply4Id
  },
  {
    text:loremIpsum({count:Math.random()*10,units:'sentences'}),
    delete_password,
    created_on:new Date().setFullYear(2000),
    reported:false,
    thread:threadOneId,
  },{
  text:loremIpsum({count:Math.random()*10,units:'sentences'}),
  delete_password,
  created_on:new Date().setFullYear(2001),
  reported:true,
  thread:threadTwoId,
  },{
  text:loremIpsum({count:Math.random()*10,units:'sentences'}),
  delete_password,
  created_on:new Date().setFullYear(2002),
  reported:false,
  thread:threadThreeId,
  },{
  text:loremIpsum({count:Math.random()*10,units:'sentences'}),
  delete_password,
  created_on:new Date().setFullYear(2003),
  reported:false,
  thread:threadFourId,
  },{
  text:loremIpsum({count:Math.random()*10,units:'sentences'}),
  delete_password,
  created_on:new Date().setFullYear(2004),
  reported:true,
  thread:threadFiveId,
  },{
  text:loremIpsum({count:Math.random()*10,units:'sentences'}),
  delete_password,
  created_on:new Date().setFullYear(2005),
  reported:true,
  thread:threadSixId,
  },{
  text:loremIpsum({count:Math.random()*10,units:'sentences'}),
  delete_password,
  created_on:new Date().setFullYear(2006),
  reported:false,
  thread:threadSevenId,
  },{
  text:loremIpsum({count:Math.random()*10,units:'sentences'}),
  delete_password,
  created_on:new Date().setFullYear(2007),
  reported:true,
  thread:threadEightId,
  },{
  text:loremIpsum({count:Math.random()*10,units:'sentences'}),
  delete_password,
  created_on:new Date().setFullYear(2008),
  reported:true,
  thread:threadNineId,
  },{
  text:loremIpsum({count:Math.random()*10,units:'sentences'}),
  delete_password,
  created_on:new Date().setFullYear(2009),
  reported:false,
  thread:threadTenId,
  },{
  text:loremIpsum({count:Math.random()*10,units:'sentences'}),
  delete_password,
  created_on:new Date().setFullYear(2010),
  reported:false,
  thread:threadElevenId,
  }
]

const populateBoard=()=>{
  Board.remove({}).then(()=>{
    Board.create({title:'seedBoard',_id:boardId,delete_password:'a'},(err,board)=>{
      if (err) return console.log(err)
    })
  })
}

const populateThread=()=>{
  Thread.remove({}).then(()=>{
    Thread.insertMany(threads,(err,thread)=>{
      if (err) console.log(err)
      return thread._id;
    })
  })
}

const populateReply=()=>{
  Reply.remove({}).then(()=>{
    Reply.insertMany(replies,(err,result)=>{
      if (err) console.log(err)
    })
  })
}
module.exports={
  populateBoard,populateThread, populateReply,threadOneId
}
