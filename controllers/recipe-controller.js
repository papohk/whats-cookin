const fetch = require("node-fetch")
const {User} = require("../models/userModel")
console.log(process.env.SPOONACULAR_KEY)
module.exports = {
    search: async (req, res) => {

        const response = await fetch(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${req.query.ingredients}&apiKey=${process.env.SPOONACULAR_KEY}`)
        const body = await response.json()
        const sessionInfo = req.session.passport
        try {
            let user = null
            if (sessionInfo) {
                user = await User.findById(sessionInfo.user)
                const favoriteIds = []
                for (let i = 0; i<user.favorites.length; i++) {
                    let fav = user.favorites[i]
                    favoriteIds.push(fav.id)
                }
                user.favids=favoriteIds
            }

            res.render("pages/recipe-search", { recipes: body, user: user })
        } catch (error) {
            console.log(error)
        };

    },
    details: async (req, res) => {
        console.log('recipes details', req.params)
        const sessionInfo = req.session.passport
        try {
            let user = null
            if (sessionInfo) {
                user = await User.findById(sessionInfo.user)
            }
            const response = await fetch(`https://api.spoonacular.com/recipes/${req.params.id}/information?apiKey=${process.env.SPOONACULAR_KEY}`)
            const body = await response.json()
            console.log('details data', body)
            res.render("pages/recipe-details", { recipe:body, user:user })
        } catch (error) {
            console.log('details error', error)
        }



    }
}