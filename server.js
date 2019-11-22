const fs = require('fs')
const path = require('path')
const mustache = require('mustache')
const express = require('express')
var cors = require('cors');
const app = express()
const { db } = require("./db")
const stringify = require('json-stringify-safe')


const port = 9000


app.use(cors())
app.use(express.static(path.join(__dirname, 'public')));


  app.get('/testApi', function(req, res, next) {

    getEpisodes()
    .then((episodeData) => {
        res.send(episodeData.rows)
    } )
    
});

const getEpisodes = () => {
    return db.raw(
        `select *
        from episodes
        `
    )
}

app.listen(port, function () {
    console.log('Listening on port ' + port + ' 👍')
  })