const fetch=require("node-fetch")
console.log(process.env.SPOONACULAR_KEY)
module.exports= {
     search: async (req, res) => {
        
        const response=await fetch(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${req.query.ingredients}&apiKey=${process.env.SPOONACULAR_KEY}`)
        const body=await response.json()
        res.render("pages/recipe-search", { recipes: body })
    }
}