var express = require('express');
var router = express.Router();
// const db = require('../db.js')
const { db } = require("./../db.js")


router.get('/', function(req, res, next) {
    console.log('fetching')
    // console.log(JSON.stringify(getEpisodes()))
    res.send('ALL EPISODES GO HERE');
});

const getEpisodes = () => {
    return db.raw(`
    select *
    from episodes`)
}

module.exports = router;