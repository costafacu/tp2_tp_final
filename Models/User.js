import { DataTypes, Model } from "sequelize";
import connection from "../connection/connection.js";
import bcrypt from "bcrypt";

class User extends Model {
  validatePassword = async (passwordTextoPlano) => {
    const validate = await bcrypt.hash(passwordTextoPlano, this.salt);
    return validate === this.password;
  };
}

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
    },
    salt: { 
      type: DataTypes.STRING 
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Debe ingresar una contraseña.",
        },
      },
    },
  },
  {
    sequelize: connection,
    modelName: "User",
    timestamps: false,
  }
);

User.beforeCreate(async (user) => {
  const salt = await bcrypt.genSalt();
  user.salt = salt;
  const hashPassword = await bcrypt.hash(user.password, salt);
  user.password = hashPassword;
});

export default User;
