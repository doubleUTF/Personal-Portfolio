const express = require('express')
const app = express()
const path= require('path');

// HTTPS Redirect
// app.set('trust proxy', true);
// app.use(function(req, res, next) {
//   if (req.secure){
//     return next();
//   }
//   res.redirect("https://" + req.headers.host + req.url);
// });
app.use(express.static('public'))

// Catch all other routes and return index
app.get('*',(req,res)=>{
  res.sendFile(path.join(__dirname, 'public/index.html'))
})

const PORT= process.env.port || 8080;
app.listen(PORT, () => console.log(`David Lau Portfolio listening on port ${PORT}!`))
