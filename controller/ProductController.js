import Product from "../Models/index.js";

class ProductController {
  constructor() {}

  getAllProducts = async (req, res) => {
    try {
      const productos = await Product.findAll();
      res
        .status(200)
        .send({
          success: true,
          message: "Todos los productos",
          data: productos,
        });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };
  getProductById = async (req, res) => {
    try {
      const producto = await Product.findOne({
        where: {
          id: req.params.id,
        },
      })
      if (!producto){
        throw new Error("no se encontro el producto con esa ID")
      }
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };
  createProduct = async (req, res) => {
    try {
    } catch (error) {}
  };
  updateProduct = async (req, res) => {
    try {
    } catch (error) {}
  };
  deleteProduct = async (req, res) => {
    try {
    } catch (error) {}
  };
}
