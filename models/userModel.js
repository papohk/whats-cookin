const mongoose = require('mongoose');
const passport = require('passport');
const passportLocalMongoose = require('passport-local-mongoose');
const {Schema, model} = mongoose;
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const findOrCreate = require('mongoose-findorcreate');

const userSchema = new Schema({
    username: {
        type: String,
        required: false,
        minlength: 3
    },
    
    email: {
        type: String,
        required: true,
        unique:true,
    },
    
    password: {
        type: String,
        required: true,
        minlength: 3
    },
    
    googleId: {
        type: String,
    }
}

);

userSchema.plugin(passportLocalMongoose);
userSchema.plugin(findOrCreate); 

const User = mongoose.model('User', userSchema);

passport.use(User.createStrategy());

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
        done(err, user);
    });
});

passport.use(new GoogleStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: "https://whatscookin-recipes.herokuapp.com/favlist"
},
function(accessToken, refreshToken, email, cb) {
    User.findOrCreate({ googleId: email.id }, function (err, user) {
        return cb(err, user);
    });
}
));

module.exports = {User, passport}