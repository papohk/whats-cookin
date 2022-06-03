const { User, passport } = require('../models/userModel');
// const passport = require('passport');

module.exports = {
    index: async (request, response) => {
        const sessionInfo = request.session.passport
        try {
            let user = null
            if (sessionInfo) {
                user = await User.findById(sessionInfo.user)
            }
            response.render('pages/index', {user:user});
        } catch (error) {
            console.log(error)
        }
    },

    favlist: async (request, response) => {
        const sessionInfo = request.session.passport
        console.log('SESSION INFOMATION:', sessionInfo)

        try {
            if (!sessionInfo) {
                throw { redirect: true }
            }
            const userId = request.session.passport.user
            const user = await User.findById(userId)
            const favoriteIds = []
            for (let i = 0; i<user.favorites.length; i++) {
                let fav = user.favorites[i]
                favoriteIds.push(fav.id)
            }
            user.favids=favoriteIds
            console.log(user)
            response.render('pages/favlist', { user: user });
        } catch (error) {
            if (error.redirect) {
                response.redirect('/login')
            }
            console.log(error)
        }
    },

    signup: async(request, response) => {

        const sessionInfo = request.session.passport
        try {
            let user = null
            if (sessionInfo) {
                user = await User.findById(sessionInfo.user)
            }
            response.render('pages/signup', {user:user});
        } catch (error) {
            console.log(error)
        };
    },
    login: async(request, response) => {
        const sessionInfo = request.session.passport
        try {
            let user = null
            if (sessionInfo) {
                user = await User.findById(sessionInfo.user)
            }
            response.render('pages/login', {user:user});
        } catch (error) {
            console.log(error)
        };
    },


    logout: (request, response) => {
        request.logout();
        response.redirect('/');
    },


    google_get: passport.authenticate('google', { scope: ['openid', 'profile', 'email'] }),

    google_redirect_get: passport.authenticate('google', { scope: ['openid', 'profile', 'email'] }),
    function(req, res) {
        res.redirect('/favlist');
    }
}