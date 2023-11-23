import { DataTypes, Model } from "sequelize";
import connection from "../connection/connection.js";

class Product extends Model { }

Product.init(
  {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "El nombre del producto no puede estar vacío.",
        },
      },
    },
    marca: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "La marca del producto no puede estar vacía.",
        },
      },
    },
    modelo: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "El modelo del producto no puede estar vacío.",
        },
      },
    },
    precio: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        isFloat: {
          msg: "El precio debe ser un número decimal.",
        },
        min: {
          args: [0.1],
          msg: "El precio debe ser mayor a 0.",
        },
      },
    },
    fotoURL: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isUrl: {
          msg: "La URL de la foto no es válida.",
        },
      },
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: {
          args: [0],
          msg: "El stock no puede ser negativo.",
        },
      },
    }
  },
  {
    sequelize: connection,
    modelName: "Product",
    timestamps: false,
  }
);

export default Product;