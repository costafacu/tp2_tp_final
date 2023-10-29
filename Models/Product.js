import { DataTypes, Model } from "sequelize";
import connection from "../connection/connection.js";

class Product extends Model {}

Product.init(
    {
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        marca:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        modelo:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        precio:{
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        fotoURL:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        stock:{
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    },
    {
        sequelize: connection,
        modelName: "Product",
        timestamps: false,
    }
);

export default Product;