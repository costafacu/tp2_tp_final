import { Router } from "express";
import roleRoutes from "./roleRoutes.js";
import userRoutes from "./userRoutes.js";

const router = Router();

router.use("/role", roleRoutes);
router.use("/user", userRoutes);



export default router;
