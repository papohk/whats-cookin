const { User, passport } = require("../models/userModel");
// const passport = require ('passport');

module.exports = {

    signup: (request, response) => {
        const { username, email, password } = request.body;
        console.log('The signup password is: ', password)
        User.register({ email: email, username: username, password: password }, password, (error, user) => {
            if (error) {
                console.log(error);
                response.redirect('/signup');
            } else {
                passport.authenticate('local')(request, response, () => {
                    response.redirect('/login');
                });
            }
        });
    },

    login: (request, response) => {
        const { email, username, password } = request.body;
        console.log(`PASSWORD ENTERED: ', ${password}`)
        const user = new User({
            username: username,
            password: password
        });
        request.login(user, (error) => {
            if (error) {
                console.log(`The error at login is: ${error}`);
                response.redirect('/login');
            } else {
                console.log('SUCCESSFULLY LOGIN !!')
                passport.authenticate('local')(request, response, () => {
                    response.redirect('/favlist');
                });
            }
        });
    },

    logout: (request, response) => {
        request.logout((error) => {
            if (!error) {

                response.redirect('/');
            } else {
                console.log(error)
            }
        });
    },

    // working on sending patch request onclick of heart 5.31.22 (to do next) currently getting bad request
    fav: async (req, res) => {
        console.log('fav route', req.session)
        const userid = req.session.passport.user
        console.log(req.body)
        try {
            const user = await User.findByIdAndUpdate(userid, {
                $push: {
                    favorites: req.body
                }
            })
            res.status(201).json({ message: 'Your recipe added to favorites!!' })

        } catch (error) {
            res.status(500).json(error)

        }


    }
}