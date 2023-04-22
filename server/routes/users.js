const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');

router.get('/api/shopping-list', (req, res) => {
  return res.status(200).json();
})



module.exports = router;