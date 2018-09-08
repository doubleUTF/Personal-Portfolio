const {User}= require('./user.model')
const {Exercise}=require('./exercise.model')
const randomString=require('randomstring')
const moment= require('moment');

var exercise_newUser= (req,res,next)=>{
  console.log(req.body)
  if (!req.body.username) return res.json({error:'Enter a valid username'})
  User.findOne({username:req.body.username},(err,user)=>{
    if (err) return res.json(err);
    // User taken
    if (user) {
      return res.json({error:'Username already taken'})
    } else {
    // Create new user
    createNewUser(req,res)
    }
  })
}

var exercise_newExercise=(req,res,next)=>{
  let body=req.body;
  User.findById(body.userId, (err,user)=>{
    if (err) return res.json(err)
    if (!user) return res.json({error:"userId not found"})
    let date=moment(req.body.date,"MM-DD-YYYY");
    let exerciseObj={userId:body.userId,description:body.description,
    duration:body.duration,date:date.toDate()}
    let newExercise=new Exercise(exerciseObj);
    newExercise.save((err)=>{
      if (err) return res.json(err);
      res.json({
        message:'saved',
        data:{
          userId:body.userId,
          description:body.description,
          duration:body.duration + ' minutes',
          date:date.format("MM-DD-YYYY")
          }
      });
    })
  })
}

var exercise_query=(req,res,next)=>{
  User.findById(req.query.userId,(err,user)=>{
    if (err) return res.json(err)
    if (!user) return res.json({error:'userId not found'})
    let query={};
    let from=moment(req.query.from,"MM-DD-YYYY").toDate();
    let to=moment(req.query.to,"MM-DD-YYYY").toDate()
    query.userId=req.query.userId
    req.query.from ? query.date={$gte:from} :'';
    req.query.to ? query.date={$lte:to}:'';
    req.query.from && req.query.to ? query.date={$gte:from,$lte:to} : '';
    console.log(req.query)
    Exercise.find(query, {_id:0,__v:0}, {limit:Number(req.query.limit)},(err,docs)=>{
      if (err) return res.json(err)
      res.json(docs)
    })
  })
}

function createNewUser(req,res){
  let rString=randomString.generate(7);
  User.findById(rString,(err,user)=>{
    if (err) return res.json(err);
    // Look for existing id to prevent collision
    if (user){
      createNewUser(req,res)
    } else {
      // Create new user
      let userObj={username:req.body.username,_id:rString}
      let user=new User(userObj)
      user.save((err)=>{
        if (err) return res.json(err);
        res.json(userObj)
      })
    }
  })
}

module.exports={exercise_newUser, exercise_newExercise, exercise_query}
