const {User}= require('./user.model')
const {Exercise}=require('./exercise.model')
const randomString=require('randomstring')

var exercise_newUser= (req,res,next)=>{
  User.findOne({username:req.params.username},(err,user)=>{
    if (err) return res.json(err);
    // User taken
    if (user) {
      return res.send('Username already taken')
    } else {
    // Create new user
    createNewUser(req,res)
    }
  })
}

var exercise_newExercise=(req,res,next)=>{

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
      let userObj={username:req.params.username,_id:rString}
      let user=new User(userObj)
      user.save((err)=>{
        if (err) return res.json(err);
        res.json(userObj)
      })
    }
  })
}

module.exports={exercise_newUser, exercise_newExercise}
