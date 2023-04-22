const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');



const authController = {};

authController.login = (req, res, next) => {
  const{email, password} = req.params;
//compare the password
  next();
}

authController.register = async(req, res, next) => {
    try{
    const  {firstname, lastname, email, password} = req.body;
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);
    const query = 'INSERT INTO users(firstname, lastname, email, password) VALUES(firstname, lastname, email, password)';



    } catch(err){
        res.status(500).json({error: err.message});
    }
  }

module.exports = authController;