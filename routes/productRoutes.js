import { Router } from "express";
import ProductController from "../controller/ProductController.js";
const productRoutes = Router();
const productController=new ProductController()

productRoutes.get("", productController.getAllProducts);
productRoutes.get("/:id",productController.getProductById);
productRoutes.post("/", productController.createProduct);
productRoutes.put("/:id",productController.updateProduct)
productRoutes.delete("/:id", productController.deleteProduct);
productRoutes.post("/:id/like", productController.likeProduct);

export default productRoutes;