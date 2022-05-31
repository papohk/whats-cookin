const router=require("express").Router()
const recipeController=require("../controllers/recipe-controller")

router.get('/', recipeController.search)
router.get('/:id', recipeController.details)
module.exports=router;