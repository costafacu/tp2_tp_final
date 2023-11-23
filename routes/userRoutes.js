import { Router } from "express";
import UserController from "../controller/UserController.js";
import { validateUser } from "../middlewares/validateUser.js";
import { isAdmin } from "../middlewares/isAdmin.js";
const userController = new UserController();

const userRoutes = Router();

userRoutes.post("/", userController.createUser);
userRoutes.post("/login", userController.login);

userRoutes.use(validateUser);
userRoutes.get("/me", userController.me);
userRoutes.get("/", isAdmin, userController.getAllUsers);
userRoutes.get("/:id", userController.getUserById);
userRoutes.put("/:id", userController.updateUser);
userRoutes.delete("/:id", userController.deleteUser);

export default userRoutes;
