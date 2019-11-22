const fs = require('fs')
const path = require('path')
const mustache = require('mustache')
const express = require('express')
var cors = require('cors');
const app = express()
const { db } = require("./db")
const stringify = require('json-stringify-safe')
// const knex = require('knex')({
//     client: 'pg',
//     connection: {
//         database: 'thisamericanlifetracker'
//     }
//   });

//port 3000

const port = 9000

//for mustache

//login template

// const loginTemplate = fs.readFileSync('./templates/login.html', 'utf8')
// app.use(express.urlencoded())

app.use(cors())
app.use(express.static(path.join(__dirname, 'public')));

// app.get('/', function (req, res) {
    
//     res.send(mustache.render(loginTemplate))
//   })

  app.get('/testApi', function(req, res, next) {

    getEpisodes()
    .then((episodeData) => {
        res.send(episodeData.rows)
    } )
    // const episodes = JSON.stringify(getEpisodes())
    // console.log('fetching')
    // res.json(episodes.toPlainObject())
    // console.log(JSON.stringify(getEpisodes()))
    // res.send('ALL EPISODES GO HERE', getEpisodes());
});

const getEpisodes = () => {
    return db.raw(
        `select *
        from episodes
        where episode_number = 1 OR episode_number = 2`
    )
}

app.listen(port, function () {
    console.log('Listening on port ' + port + ' 👍')
  })