//This file will be used to rewrite my passport function
const { db } = require("./db")
const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt')
const saltRounds = 10;


function initialize(passport, getUserByEmail) {
    // console.log(getUserByEmail)
    const authenticateUser = async (email, password, done) => {
        console.log(email, password, 'this is the email and password coming from the form')
        const user = await getUserByEmail(email)
        const encryptedPassword = bcrypt.hashSync(password, saltRounds)
        console.log(encryptedPassword, 'this is the encrypted password')
            if (user == null) {
                return done(null, false, { message: 'no user with that email'})
            }
            console.log(user.rows, 'this is the user object coming from get user by email')
        try {
            if (await bcrypt.compare(password, user.rows.password)) {
                return done(null, user)
            } else {
                return done(null, false, {message: 'Password incorrect'})
            }
        } catch (err) {
            return done(err)
        } 
    }

    passport.use(new LocalStrategy({ usernameField: 'email'}, authenticateUser))

    passport.serializeUser((user, done) => {})
    passport.deserializeUser((user, done) => {})

}

module.exports = initialize