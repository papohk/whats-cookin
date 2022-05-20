const userModel = require ("../models/user")

module.exports = {
    login: () => {},
    signup: async (req, res) => {
        const {username, password} = req.body
        const existingUser = await userModel.findOne({username})
        if (existingUser) {
            res.status(400).send("A user already exist with that name.")
            return
        }
        try {
            const newUser  = await userModel.create({username, password})
            res.sendStatus(201)
        } catch (err) {
            console.error(err)
            res.status(400).send("Error in creating user")
        }
        

    }
}