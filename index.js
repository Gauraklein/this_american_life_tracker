const fs = require('fs')
const mustache = require('mustache')
const express = require('express')
const app = express()

//port 3000

const port = 3000

//for mustache

//login template

const loginTemplate = fs.readFileSync('./templates/login.html', 'utf8')
app.use(express.urlencoded())

app.get('/', function (req, res) {
    
    res.send(loginTemplate)
  })


app.listen(port, function () {
    console.log('Listening on port ' + port + ' 👍')
  })