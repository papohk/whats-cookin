const router=require("express").Router()

const siteRoutes=require("./site-routes")
router.use("/", siteRoutes)

const recipeRoutes=require("./recipe-routes")
siteRoutes.use("/recipes", recipeRoutes)

const userRoutes=require("./user-routes")
siteRoutes.use("/user", userRoutes)

module.exports=router
