import jwt from 'jsonwebtoken';
import { environment } from "../config/config.js";

export const generateToken = (payload) => {
  const token = jwt.sign(payload, environment.SECRET_WORD, { expiresIn: "2d" });
  return token;
};
  
export const verifyToken = (token) => {
  const verify = jwt.verify(token, environment.SECRET_WORD);
  return verify;
};
  