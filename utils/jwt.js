import jwt from 'jsonwebtoken';

export const generateToken = (payload) => {
    const token = jwt.sign(payload, "palabraSecreta", { expiresIn: "2d" });
    return token;
  };
  
  export const verifyToken = (token) => {
    const verify = jwt.verify(token, "palabraSecreta");
    return verify;
  };
  