const userModel = require ("../models/user")

module.exports = {
    login: async (req, res) => {
        console.log("------LOGIN----", req.body)
        const {email, password} = req.body
        const existingUser = await userModel.findOne({email})  
        if (!existingUser) {
            res.status(400).send("A user doesn't exist with that name")
            return
        }
        if (existingUser.password!=password) {
            res.status(400).send("Invaild password!")

        }
        res.redirect("/favlist")
    },
    signup: async (req, res) => {
        console.log("------SIGNUP----", req.body)
        const {username, password, email} = req.body
        const existingUser = await userModel.findOne({email})
        if (existingUser) {
            res.status(400).send("An account with this email account already exists")
            return
        }
        try {
            const newUser  = await userModel.create({username, password, email})
            res.redirect("/login")
        } catch (err) {
            console.error(err)
            res.status(400).send("Error in creating user")
        }
        

    }
}