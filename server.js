const fs = require('fs')
const path = require('path')
const mustache = require('mustache')
const express = require('express')
const app = express()
const { db } = require("./db.js")

//port 3000

const port = 9000

//for mustache

//login template

// const loginTemplate = fs.readFileSync('./templates/login.html', 'utf8')
app.use(express.urlencoded())

app.use(express.static(path.join(__dirname, 'public')));

// app.get('/', function (req, res) {
    
//     res.send(mustache.render(loginTemplate))
//   })

  app.get('/testApi', function(req, res, next) {

    console.log(getEpisodes())
    console.log('fetching')
    // console.log(JSON.stringify(getEpisodes()))
    res.send('ALL EPISODES GO HERE', getEpisodes());
});

const getEpisodes = () => {
    return db.raw(`
    SELECT *
    FROM episodes
    WHERE episode_number = 1`)
}

app.listen(port, function () {
    console.log('Listening on port ' + port + ' 👍')
  })