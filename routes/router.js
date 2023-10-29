import { Router } from "express";
import roleRoutes from "./roleRoutes.js";
import userRoutes from "./userRoutes.js";
// import productRoutes from "./productRoutes.js";

const router = Router();

router.use("/role", roleRoutes);
router.use("/user", userRoutes);
// router.use("/product", productRoutes);


export default router;
