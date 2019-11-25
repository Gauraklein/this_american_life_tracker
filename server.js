const fs = require('fs')
const path = require('path')
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

app.use(passport.initialize());
app.use(passport.session());

app.get('/success', (req, res) => res.send("Welcome "+req.query.username+"!!"));
app.get('/error', (req, res) => res.send("error logging in"));

passport.use(
  new LocalStrategy((username, password, done) => {
    console.log("got auth request");
    db("users")
      .where({ username: username })
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

passport.serializeUser(function(user, cb) {
  cb(null, user.id);
});

passport.deserializeUser(function(id, cb) {
  User.findById(id, function(err, user) {
    cb(err, user);
  });
});

app.use(cors())
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true })); //For body parser
app.use(bodyParser.json());



  app.get('/testApi', function(req, res, next) {

    getEpisodes()
    .then((episodeData) => {
        res.send(episodeData.rows)
    } )
    
});


//login route

app.get('/login', function(req, res, next) {
    res.sendFile(path.join(__dirname + '/login.html'));
})

app.post("/login", (req, res, next) => {
  console.log(req.body)
  passport.authenticate('local', { failureRedirect: '/error' }),
  function(req, res) {
    console.log("got to this point")
    res.redirect('/success?username='+req.user.username);
  }
});

app.get("/", function(req, res, next) {
  res.send("HOW DID WE END UP HERE?")
})


/// FUNCTiONS \\\\\\
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



  // passport from attaboy

  // passport.use(
  //   new LocalStrategy((username, password, done) => {
  //     console.log("got auth request");
  //     db("users")
  //       .where({ username: email })
  //       // .orwhere({ email: username })
  //       .then(res => {
  //         // console.log(userRows)
  //         const user = res[0];
  //         // console.log(user);
  //         if (!user) {
  //           console.log("User not found");
  //           done(null, false);
  //         } 
          
  //         if (bcrypt.compareSync(user.password, password)) {
  //           console.log("Wrong Password");
  //           done(null, false);
  //         } else
  //         console.log("User found");
  //         return done(null, user);
  //       })
  //       .catch(err => {
  //         console.error("Local strategy error - ", err);
  //         return err;
  //       });
  //   })
  // );
  // app.use(
  //   session({
  //     secret: "keyboard cat",
  //     resave: false,
  //     saveUninitialized: true,
  //     cookie: {}
  //   })
  // );
  // app.use(passport.initialize());
  // app.use(passport.session());
  // app.use(bodyParser.json());
  // app.use(bodyParser.urlencoded({ extended: true }));
  // app.use(express.static("public"));
  // passport.serializeUser(function(user, done) {
  //   done(null, user.id);
  // });
  // passport.deserializeUser(function(id, done) {
  //   db("users")
  //     .where({ id: id })
  //     .then(res => {
  //       done(null, res[0]);
  //     })
  //     .catch(error => done(error, false));
  // });

  // Login Routes from attaboy

  // app.post("/login", (req, res, next) => {
  //   passport.authenticate("local", (err, user, info) => {
  //     if (info) {
  //       return res.send(info.message);
  //     }
  //     if (err) {
  //       return next(err);
  //     }
  //     if (!user) {
  //       return res.redirect("/no-user");
  //     }
  //     req.login(user, err => {
  //       if (err) {
  //         return next(err);
  //       }
  //       return res.redirect("/home");
  //     });
  //   })(req, res, next);
  // });
  