//This file will be used to rewrite my passport function
const { db } = require("./db")
const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt')



function initialize(passport, getUserByEmail, getUserById) {
    // console.log(getUserByEmail)
    const authenticateUser = async (email, password, done) => {
        // console.log(email, password, 'this is the email and password coming from the form')
        const user = await getUserByEmail(email)
       
        
            if (user == null) {
                return done(null, false, { message: 'no user with that email'})
            }
            
        try {
            if (await bcrypt.compare(password, user.rows[0].password)) {
                return done(null, user)
            } else {
                return done(null, false, {message: 'Password incorrect'})
            }
        } catch (err) {
            return done(err)
        } 
    }

    passport.use(new LocalStrategy({ usernameField: 'email'}, authenticateUser))
    
    passport.serializeUser((user, done) => {
        console.log(user.rows[0], 'this is from serialize user')
        return done(null, user.rows[0].id)
    })

    passport.deserializeUser((id, done) => {
        console.log(id, 'from deserialize user')
        return done(null, getUserById(id))
    })

}

module.exports = initialize