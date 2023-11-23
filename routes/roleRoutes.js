import { Router } from "express";
import RoleController from "../controller/RoleController.js";
import { isAdmin } from "../middlewares/isAdmin.js";
import { validateUser } from "../middlewares/validateUser.js";

const roleRoutes = Router();
const roleController = new RoleController()

roleRoutes.use(validateUser);
roleRoutes.use(isAdmin);

roleRoutes.get("", roleController.getAllRoles);
roleRoutes.get("/:id", roleController.getRoleById);
roleRoutes.post("/", roleController.createRole);
roleRoutes.put("/:id", roleController.updateRole)
roleRoutes.delete("/:id", roleController.deleteRole);

export default roleRoutes;
