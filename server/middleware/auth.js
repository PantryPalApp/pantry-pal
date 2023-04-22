import jwt from 'jsonwebtoken';


const authMiddleware = {};

authMiddleware.verifyToken = async (req,res,next) =>{
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

export default authMiddleware;