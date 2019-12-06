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
const saltRounds = 10;





const port = 9000


//--------------------------------------\\
//               PASSPORT               \\
//--------------------------------------\\

app.use(passport.initialize());
// app.use(flash())
app.use(
  session({
    secret: "Good Luck Gaura",
    resave: false,
    saveUninitialized: true,
    cookie: {}
  })
  );
app.use(passport.session());
app.use(cors())
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true})); //For body parser
app.use(bodyParser.json());



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
        console.log("User found", user);
        return done(null, user);
      })
      .catch(err => {
        console.error("Local strategy error - ", err);
        return err;
      });
  })
);


  app.get('/allEpisodes', function(req, res, next) {
    console.log('episodes loading')
    getEpisodes()
    .then((episodeData) => {
      return episodeData.rows.sort((a, b) => (a.episode_number < b.episode_number) ? 1 : -1)
    })
    .then((sortedEpisodes) => {
      // console.log(episodeData)
        res.send(sortedEpisodes)
    } )
    
});


//login route

app.get('/login', function(req, res, next) {
    res.sendFile(path.join(__dirname + '/login.html'));
})

app.post("/login", (req, res, next) => {
  console.log('something is being posted to login')
  console.log(req.body)
  passport.authenticate("local", (err, user, info) => {
    if (info) {
      return res.send(info);
    }
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.send("user not found");
    }
    req.login(user, err => {
      if (err) {
        return next(err);
      }
      return res.json('logged in');
    });
  })(req, res, next);
});


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

// LOGOUT

app.get('/logout', function(req, res){
  req.logout();
  console.log('logged Out')
  res.send('logged out');
});


// SIGN UP

app.get('/signup', function(req, res){
  res.sendFile(path.join(__dirname + '/signup.html'));
})

app.post('/signup', function(req, res){
  db('users')
    .insert({
      username: req.body.username,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, saltRounds)
    })
    .then(function(){
      res.send('user added')
    })
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
  