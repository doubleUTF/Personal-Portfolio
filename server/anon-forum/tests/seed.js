const bcrypt=require('bcryptjs')
const Board= require('../models/board');
const Reply= require('../models/reply');
const Thread= require('../models/thread');
const loremIpsum = require('lorem-ipsum');
const ObjectId=require('mongodb').ObjectId;

const boardId1=new ObjectId();
const boardId2=new ObjectId();
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
const threadTwelveId=new ObjectId();

const reply1Id=new ObjectId();
const reply2Id=new ObjectId();
const reply3Id=new ObjectId();
const reply4Id=new ObjectId();
const reply5Id=new ObjectId();

const salt=bcrypt.genSaltSync(10);
const password='a'
const delete_password=bcrypt.hashSync(password,salt);
const boards=[
  {title:'Technical Support', delete_password, _id:boardId2,
  description:'Post technical-related issues.'},
  {title:'General Discussion',delete_password,
  description:'Discuss any topic that comes to mind.'},
  {title:'Suggestions',delete_password,
  description:'Give your thoughts about this forum.'},
  {title:'Lorem Ipsum',_id:boardId1,delete_password,
  description:'Many lorem ipsums.'},
  {title:'Job Openings', delete_password,
  description:'Available positions for employment.'},
  {title:'FAQs',delete_password,
  description:'Frequently asked questions'},
  {title:'Deals',delete_password,
  description:'See our latest deals and offerings'},
  {title:'Memes',delete_password,
  description:'Memes and dreams.'}
];

const showDeletepassword=`. Delete password is ${password}`;
const threads=[
  {
    text:loremIpsum({count:Math.random()*10,units:'sentences'})+showDeletepassword,
    delete_password,
    created_on:new Date().setFullYear(2000),
    bumped_on:new Date().setFullYear(2018),
    reported:false,
    _id:threadOneId,
    board:boardId1,
    replies:[reply1Id,reply2Id,reply3Id,reply4Id]
},{
  text:loremIpsum({count:Math.random()*10,units:'sentences'})+showDeletepassword,
  delete_password,
  created_on:new Date().setFullYear(2001),
  bumped_on:new Date().setFullYear(2001),
  reported:true,
  _id:threadTwoId,
  board:boardId1,
},{
  text:loremIpsum({count:Math.random()*10,units:'sentences'})+showDeletepassword,
  delete_password,
  created_on:new Date().setFullYear(2002),
  bumped_on:new Date().setFullYear(2002),
  reported:false,
  _id:threadThreeId,
  board:boardId1,
},{
  text:loremIpsum({count:Math.random()*10,units:'sentences'})+showDeletepassword,
  delete_password,
  created_on:new Date().setFullYear(2003),
  bumped_on:new Date().setFullYear(2003),
  reported:false,
  _id:threadFourId,
  board:boardId1,
},{
  text:loremIpsum({count:Math.random()*10,units:'sentences'})+showDeletepassword,
  delete_password,
  created_on:new Date().setFullYear(2004),
  bumped_on:new Date().setFullYear(2004),
  reported:true,
  _id:threadFiveId,
  board:boardId1,
},{
  text:loremIpsum({count:Math.random()*10,units:'sentences'})+showDeletepassword,
  delete_password,
  created_on:new Date().setFullYear(2005),
  bumped_on:new Date().setFullYear(2005),
  reported:true,
  _id:threadSixId,
  board:boardId1,
},{
  text:loremIpsum({count:Math.random()*10,units:'sentences'})+showDeletepassword,
  delete_password,
  created_on:new Date().setFullYear(2006),
  bumped_on:new Date().setFullYear(2006),
  reported:false,
  _id:threadSevenId,
  board:boardId1,
},{
  text:loremIpsum({count:Math.random()*10,units:'sentences'})+showDeletepassword,
  delete_password,
  created_on:new Date().setFullYear(2007),
  bumped_on:new Date().setFullYear(2007),
  reported:true,
  _id:threadEightId,
  board:boardId1,
},{
  text:loremIpsum({count:Math.random()*10,units:'sentences'})+showDeletepassword,
  delete_password,
  created_on:new Date().setFullYear(2008),
  bumped_on:new Date().setFullYear(2008),
  reported:true,
  _id:threadNineId,
  board:boardId1,
},{
  text:loremIpsum({count:Math.random()*10,units:'sentences'})+showDeletepassword,
  delete_password,
  created_on:new Date().setFullYear(2009),
  bumped_on:new Date().setFullYear(2009),
  reported:false,
  _id:threadTenId,
  board:boardId1,
},{
  text:loremIpsum({count:Math.random()*10,units:'sentences'})+showDeletepassword,
  delete_password,
  created_on:new Date().setFullYear(2010),
  bumped_on:new Date().setFullYear(2010),
  reported:false,
  _id:threadElevenId,
  board:boardId1,
},
{text:`Hi everyone,
I have almost finished my documentation page but I am having an issue with the scroll to # section. When you click on a link it stops below the title. Does anyone know how to fix it? I want to be able to see the title of the section when I click on a link.
Also, I would love any other feedback =)
Thank you so much`,
delete_password,
reported:false,
_id:threadTwelveId,
board:boardId2,
replies:[reply5Id]
}
]

const replies=[
  {text:`Hi, the issue with the links not traveling to the intended header position is because the fixed header covers the destination of the anchor links. Add this to your CSS for a workaround (source:https://stackoverflow.com/questions/4086107/fixed-page-header-overlaps-in-page-anchors 1):
section:before{ content:''; display:block; height:60px; margin-top:-60px; }`,
delete_password,
thread:threadTwelveId,
_id:reply5Id},
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
    Board.insertMany(boards,(err,board)=>{
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

const clearTest=()=>{
  Board.remove({title:'test2'}).exec()
}

module.exports={
  populateBoard,populateThread, populateReply,threadOneId, clearTest
}
