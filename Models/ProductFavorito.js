import { DataTypes, Model } from "sequelize";
import connection from "../connection/connection.js";

class ProductFavorito extends Model {}

ProductFavorito.init(
    {
        
    },
    {
        sequelize: connection,
        modelName: "ProductFavorito",
        timestamps: false,
    }
);

export default ProductFavorito;