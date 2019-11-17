const fs = require('fs')
const path = require('path')
const mustache = require('mustache')
const express = require('express')
const app = express()

//port 3000

const port = 3000

//for mustache

//login template

const loginTemplate = fs.readFileSync('./templates/login.html', 'utf8')
app.use(express.urlencoded())

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
    
    res.send(mustache.render(loginTemplate))
  })


app.listen(port, function () {
    console.log('Listening on port ' + port + ' 👍')
  })