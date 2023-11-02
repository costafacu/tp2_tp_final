import { DataTypes, Model } from "sequelize";
import connection from "../connection/connection.js";

class User extends Model { }

User.init(
  {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "El nombre del Usuario no puede estar vacío.",
        },
      },
    },
    apellido: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "El apellido del Usuario no puede estar vacío.",
        },
      },
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: {
          msg: "Debe ingresar un nombre de usuario.",
        },
      },
    }
  },
  {
    sequelize: connection,
    modelName: "User",
    timestamps: false,
  }
);

export default User;
