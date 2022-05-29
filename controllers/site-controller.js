const User = require('../models/userModel');
const passport = require('passport');

module.exports = {
    index: (request, response) => {
        response.render('pages/index', {});
    }, 
    
    favlist: (request, response) => {
        
        response.render('pages/favlist', {});
    },  
    signup: (request, response) => {
        
        response.render('pages/signup', {});
    },
    login: (request, response) => {
        response.render('pages/login', {});
    },

    
    logout:(request, response) => {
        request.logout();
        response.redirect('/');
    },
    
    
    google_get: passport.authenticate('google', { scope: ['openid', 'profile', 'email']}),
    
    google_redirect_get: passport.authenticate('google', { scope: ['openid', 'profile', 'email']}),
    function(req, res) {
        res.redirect('/favlist');
    }
}