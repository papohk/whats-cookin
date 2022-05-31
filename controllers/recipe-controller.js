const fetch=require("node-fetch")
console.log(process.env.SPOONACULAR_KEY)
module.exports= {
     search: async (req, res) => {
        
        const response=await fetch(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${req.query.ingredients}&apiKey=${process.env.SPOONACULAR_KEY}`)
        const body=await response.json()

        
        res.render("pages/recipe-search", { recipes: body})
    },
    details: async (req, res) => {
        console.log('recipes details', req.params)
        try {

            const response=await fetch(`https://api.spoonacular.com/recipes/${req.params.id}/information?apiKey=${process.env.SPOONACULAR_KEY}`)
            const body=await response.json()
            console.log('details data', body)
            res.render("pages/recipe-details", {recipe: body})
        } catch(error) {
            console.log('details error', error)
        }

        

    }
}