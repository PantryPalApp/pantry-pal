const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../models/')

const userController = {};

authController.login = async (req, res, next) => {

  try {
    const{email, password} = req.body;
    const loginUser = {
      text: `SELECT * FROM users WHERE email = $1;`,
      values: [email]
    }
    const data = await db.query(loginUser)
    //compare the password
    const isMatch = await bcrypt.compare(password, data.rows[0].password);

    if(!isMatch) return res.status(400).json({msg: 'Invalid Credentials!'});
    // data.rows[0] is all of a single user's info
    res.locals.loginUser = data.rows[0];
    return next();

  } catch(err) {
    res.status(500).json({error: err.message});
  }
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
    
    const data = await db.query(insertUser);
    res.locals.insertUser = data.rows[0];
    return next();
  }catch(err){
        res.status(500).json({error: err.message});
    }
  }


// authController.verifyToken = async (req,res,next) =>{
//   try{
//       let token = req.headers('Authorization');

//       if(!token) return res.status(403).send('Access Denied!');

//       if(token.StartsWith('Bearer ')){
//           token = token.slice(7, token.length).trimLeft();
//       }

//       const verified = jwt.verify(token, process.env.JWT_SECRET);
//       req.user = verified;
//       next();

//   } catch(err){
//       res.status(500).json({error: err.message});
//   }
// }

module.exports = authController;