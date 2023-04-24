const express = require('express');
const router = express.Router();

const recipeController = require('../controllers/recipeController');

//post get delete shopping list

router.get('/:id/shopping-list', recipeController.getShoppingCart, (req, res) => {
  return res.status(200).json(res.locals.list);
})

router.post('/:id/shopping-list', recipeController.postShoppingList, (req, res) => {
  return res.sendStatus(200);
})

router.delete('/:id/shopping-list',recipeController.deleteShoppingList, (req, res) => {
  return res.status(200).json(res.locals.deleteList);
});

//get all recipes
router.get('/:id/recipes', recipeController.getRecipes, (req, res) => {
  return res.status(200).json(res.locals.recipes);
});

module.exports = router;