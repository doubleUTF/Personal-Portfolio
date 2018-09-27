require('./config/config')
const express = require('express')
const app = express()
const bodyParser=require('body-parser');
const mongoose=require('mongoose');
const helmet=require('helmet');
const routes=require('./server/routes');
const cors= require('cors');

// HelmetJS
app.use(helmet.hidePoweredBy({setTo:'PHP 4.2.0'}));
app.use(helmet.noCache());

mongoose.connect(process.env.MONGODB_URI);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))
// HTTPS Redirect
app.set('trust proxy', true);

// If dev, don't serve https
if (process.env.NODE_ENV=='production'){
  app.use(function(req, res, next) {
    if (req.secure){
      return next();
    }
    res.redirect("https://www." + req.headers.host + req.url);
  });
}

// Allow CORS
app.use(cors());
// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

app.use(express.static('public'))

// Serve routes
routes(app);

const PORT= process.env.port || 8080;
app.listen(PORT, () => console.log(`David Lau Portfolio listening on port ${PORT}!`))
