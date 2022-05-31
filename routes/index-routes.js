const router=require("express").Router()

const siteRoutes=require("./site-routes")
router.use("/", siteRoutes)

const recipeRoutes=require("./recipe-routes")
router.use("/recipes", recipeRoutes)

const userRoutes=require("./user-routes")
router.use("/user", userRoutes)

const favRoutes=require("./favlist-routes")
router.use("/fav", favRoutes)

module.exports=router
