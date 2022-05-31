const {User, passport} = require ("../models/userModel");
// const passport = require ('passport');

module.exports = {
    // login: async (req, res) => {
    //     console.log("------LOGIN----", req.body)
    //     const {email, password} = req.body
    //     const existingUser = await userModel.findOne({email})  
    //     if (!existingUser) {
    //         res.status(400).send("A user doesn't exist with that name")
    //         return
    //     }
    //     if (existingUser.password!=password) {
    //         res.status(400).send("Sorry! You've entered an invaild password :(")
    
    //     }
    //     res.redirect("/favlist")
    // },
    signup:(request, response) => {
        const {username, email, password} = request.body;
        console.log('The signup password is: ', password)
        User.register({email: email, username: username, password: password}, password, (error, user) => {
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
    // signup: async (req, res) => {
    //     console.log("------SIGNUP----", req.body)
    //     const {username, password, email} = req.body
    //     const existingUser = await User.findOne({email})
    //     if (existingUser) {
    //         res.status(400).send("An account with this email account already exists")
    //         return
    //     }
    //     try {
    //         const newUser  = await User.create({username, password, email})
    //         res.redirect("/login")
    //     } catch (err) {
    //         console.error(err)
    //         res.status(400).send("Error in creating user")
    //     }
    
    
    // },

    // login: (request, response) => {
    //     console.log('LOGIN', request.body)
    //     const {email, password} = request.body;
    //     const user = new User({
    //         email: email,
    //         password: password
    //     });
    //     request.login(user, (error) => {
    //         if (error) {
    //             console.log('LOGIN ERROR', error)
    //             response.redirect('pages/login');
    //         } else {
    //             console.log('LOGIN NO ERROR')
    //             passport.authenticate('local')(request, response, () => {
    //                 response.redirect('pages/favlist');
    //             });
    //         }
    //     });
    // },
    login:(request, response) => {
        const {email, password} = request.body;
        console.log(`PASSWORD ENTERED: ', ${password}`)
        User.register({email: email, password: password}, password, (error, user) => {
            if (error) {
                console.log(`The error at login is: ${error}`);
                response.redirect('pages/login');
            } else {
                console.log('SUCCESSFULLY LOGIN !!')
                passport.authenticate('local')(request, response, () => {
                    response.redirect('pages/favlist');
                });
            }
        }); 
    },
}