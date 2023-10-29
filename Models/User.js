import { DataTypes, Model } from "sequelize";
import connection from "../connection/connection.js";

class User extends Model { }

User.init(
  {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    apellido: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }
  },
  {
    sequelize: connection,
    modelName: "User",
    timestamps: false,
  }
);

export default User;
