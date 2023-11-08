import { verifyToken } from "../utils/jwt.js";

export const validateUser = async (req, res, next) => {
  try {
    const { token } = req.cookies;
    const user = verifyToken(token);
    if (!user) throw new Error("no podes pasar");
    req.user = user;
    next();
  } catch (error) {
    res.status(401).send({ message: error.message });
  }
};
