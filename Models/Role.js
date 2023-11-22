import { DataTypes as DT, Model } from "sequelize";
import connection from "../connection/connection.js";

class Role extends Model { }

Role.init(
  {
    name: {
      type: DT.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: {
          msg: "El rol no puede estar vacío.",
        },
      },
    },
  },
  {
    sequelize: connection,
    modelName: "Role",
    timestamps: false
  }
);

export default Role;
