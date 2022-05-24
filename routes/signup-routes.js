const router=require("express").Router()
const userController=require("../controllers/user-contrsoller")

router.get('/', recipeController.search)

module.exports=router;