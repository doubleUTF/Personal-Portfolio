const express = require('express')
const app = express()

app.use(express.static('public'))

const PORT= process.env.port || 8080;
app.listen(PORT, () => console.log('David Lau Portfolio listening on port 3000!'))
