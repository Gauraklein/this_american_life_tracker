const fs = require('fs')
const path = require('path')
const mustache = require('mustache')
const express = require('express')
var cors = require('cors');
const app = express()
const { db } = require("./db")
const session = require("express-session")
const bodyParser = require("body-parser");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");





const port = 9000


//--------------------------------------\\
//               PASSPORT               \\
//--------------------------------------\\

passport.use(
    new LocalStrategy((email, password, done) => {
      console.log("got auth request");
      db("users")
        .where({ email: email })
        // .orwhere({ email: username })
        .then(res => {
          // console.log(userRows)
          const user = res[0];
          // console.log(user);
          if (!user) {
            console.log("User not found");
            done(null, false);
          } 
          
          if (bcrypt.compareSync(user.password, password)) {
            console.log("Wrong Password");
            done(null, false);
          } else
          console.log("User found");
          return done(null, user);
        })
        .catch(err => {
          console.error("Local strategy error - ", err);
          return err;
        });
    })
  );
  app.use(
    session({
      secret: "keyboard cat",
      resave: false,
      saveUninitialized: true,
      cookie: {}
    })
  );
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(express.static("public"));
  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });
  passport.deserializeUser(function(id, done) {
    db("users")
      .where({ id: id })
      .then(res => {
        done(null, res[0]);
      })
      .catch(error => done(error, false));
  });
  

app.use(cors())
app.use(express.static(path.join(__dirname, 'public')));


  app.get('/testApi', function(req, res, next) {

    getEpisodes()
    .then((episodeData) => {
        res.send(episodeData.rows)
    } )
    
});

app.get('/login', function(req, res, next) {
    res.sendFile(path.join(__dirname + '/login.html'));
})

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