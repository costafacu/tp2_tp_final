import { DataTypes, Model } from "sequelize";
import connection from "../connection/connection.js";
// import {Role} from "./index.js";

class User extends Model {}

User.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      get() {
        const nameUpperCase = this.getDataValue("name");
        return nameUpperCase.toUpperCase();
      },
      set(value) {
        this.setDataValue("name", value.toLowerCase());
      },
      validate: {
        notEmpty: true,
      },
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          msg: "Pone un email",
        },
      },
    },
//     role: {
//       type: DataTypes.INTEGER,
//       references: {
//         model: Role,
//         key: "id",
//       },
//     },
  },
  {
    sequelize: connection,
    modelName: "User",
  }
);

export default User;
