const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const users = require('../')

const userController = {};

authController.login = (req, res, next) => {
  const{email, password} = req.params;
  const loginUser = {
    text: `SELECT * FROM users WHERE email = ${email};`
  }
//compare the password
  next();
}

authController.register = async(req, res, next) => {
  try{
    const  {firstname, lastname, email, password} = req.body;
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);
    const insertUser = {
    text: `INSERT INTO users(firstName, lastName, email, password) 
    VALUES ($1, $2, $3, $4)
    RETURNING *;`,
    values: [firstName, lastName, email, passwordHash],
    };
    res.locals.insertUser = insertUser;
    return next();
  }catch(err){
        res.status(500).json({error: err.message});
    }
  }


  

authController.verifyToken = async (req,res,next) =>{
  try{
      let token = req.headers('Authorization');

      if(!token) return res.status(403).send('Access Denied!');

      if(token.StartsWith('Bearer ')){
          token = token.slice(7, token.length).trimLeft();
      }

      const verified = jwt.verify(token, process.env.JWT_SECRET);
      req.user = verified;
      next();

  } catch(err){
      res.status(500).json({error: err.message});
  }
}

module.exports = authController;