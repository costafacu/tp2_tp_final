import { Router } from "express";
import ProductController from "../controller/ProductController.js";
import { validateUser } from "../middlewares/validateUser.js";
const productRoutes = Router();
const productController=new ProductController()

productRoutes.get("", productController.getAllProducts);
productRoutes.get("/:id",productController.getProductById);
productRoutes.use(validateUser)
productRoutes.post("/", productController.createProduct);
productRoutes.put("/:id",productController.updateProduct)
productRoutes.delete("/:id", productController.deleteProduct);
productRoutes.post("/:id/like", productController.likeProduct);

export default productRoutes;