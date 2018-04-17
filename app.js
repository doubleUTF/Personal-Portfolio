const express = require('express')
const app = express()
const path= require('path');

app.use(express.static('public'))

// Catch all other routes and return index
app.get('*',(req,res)=>{
  res.sendFile(path.join(__dirname, 'public/index.html'))
})

const PORT= process.env.port || 3000;
app.listen(PORT, () => console.log(`David Lau Portfolio listening on port ${PORT}!`))
