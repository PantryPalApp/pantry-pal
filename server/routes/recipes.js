const express = require('express');
const router = express.Router();

const recipeController = require('../controllers/recipeController');

//post get delete shopping list

router.get('/shopping-list', recipeController.getShoppingCart(), (req, res) => {
  return res.status(200).json(res.locals.list);
})

router.post('/shopping-list', recipeController.postShoppingList(), (req, res) => {
  return res.sendStatus(200);
})

router.delete('/shopping-list', (req, res) => {
  return res.status(200).json(res.locals.deleteList);
});

//get all recipes
router.get('/recipes', (req, res) => {
  return res.status(200).json(res.locals.recipes);
});

module.exports = router;