const express = require('express');
const router = express.Router();

const recipeController = require('../controllers/recipeController');

//post get delete shopping list

router.get('/shopping-list', (req, res) => {
  return res.status(200).json();
})

router.post('/shopping-list', (req, res) => {
  return res.status(200).json();
})

router.delete('/shopping-list', (req, res) => {
  return res.status(200).json();
});


//post get delete favorites
router.get('/favorites', (req, res) => {
  return res.status(200).json();
});

router.post('/favorites', (req, res) => {
  return res.status(200).json();
});

router.delete('/favorites', (req, res) => {
  return res.status(200).json();
});


//get all recipes
router.get('/recipes', (req, res) => {
  return res.status(200).json();
});

module.exports = router;