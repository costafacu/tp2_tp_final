import { Product } from "../Models/index.js";

class ProductController {
  constructor() { }

  getAllProducts = async (req, res) => {
    try {
      const products = await Product.findAll();
      res
        .status(200)
        .send({
          success: true,
          message: "Todos los productos",
          data: products,
        });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };
  getProductById = async (req, res) => {
    try {
      const product = await Product.findOne({
        where: {
          id: req.params.id,
        },
      })
      if (!product) {
        throw new Error("no se encontro el producto con esa ID")
      }
      res.status(200).send({ success: true, message: "Product por id", data: product });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };
  createProduct = async (req, res) => {
    try {
      const { nombre, marca, modelo, precio, fotoURL, stock } = req.body;
      const { id: userId } = req.user;
      const product = await Product.create({ nombre, marca, modelo, precio, fotoURL, stock, userId });
      if (!product) throw new Error("no se puede crear");
      res.status(200).send({ success: true, message: "Product creado", product });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };
  updateProduct = async (req, res) => {
    try {
      const { nombre, marca, modelo, precio, stock } = req.body;
      const { id } = req.params
      const product = await Product.update({ nombre, marca, modelo, precio, stock }, { where: { id } });
      res
        .status(200)
        .send({ success: true, message: "Producto modificado", data: product });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };
  deleteProduct = async (req, res) => {
    try {
      const { id } = req.params;
      const product = await Product.destroy({
        where: { id },
      });
      res
        .status(200)
        .send({ success: true, message: "Producto eliminado", data: product });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };
  likeProduct = async (req, res) => {
    try {
      const { id } = req.params;
      const { id: userId } = req.user;

      const producto = await Product.findOne({
        where: {
          id
        }
      });

      if (!producto) {
        throw new Error("No se encontró el producto")
      }

      producto.addLikedBy(userId);

      res
        .status(200)
        .send({ success: true, message: "Producto likeado" });

    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };
}

export default ProductController;
