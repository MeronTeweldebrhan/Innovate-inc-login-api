
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv'

dotenv.config()
const secret = process.env.JWT_SECRET;
const expiration = '2h';

export default function verifyJWT(req,res,next){

// Allows token to be sent via req.body, req.query, or headers
 let token = req.headers.authorization || req.body?.token || req.query.token ;

console.log(token)
// Bearer <token>
if(token){
    token=token.split(' ').pop().trim()
}

if(!token){
    return res.status(401).json({ message: 'No token found!' });
}
try {
  // The decoded object will contain the original payload ({ data: { _id, ... } })
  const { data } = jwt.verify(token, secret, { maxAge: '2h' });
  req.user = data; // Attach user data to the request object
  next();
} catch {
  return res.status(401).json({ message: 'Invalid token!' });
}

}

export function signToken({ username, email, _id }) {
  const payload = { username, email, _id };

  return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
}