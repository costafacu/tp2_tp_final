import { User, Role, Product } from "../Models/index.js";

class UserController {
  constructor() { }
  getAllUsers = async (req, res) => {
    try {
      const users = await User.findAll({
        attributes: ["id", "username", "nombre", "apellido"],
        include: [{ model: Role, attributes: ["name"] }],
      });
      if (users.length === 0) throw new Error("no hay usuarios");
      res
        .status(200)
        .send({ success: true, message: "Todos lo usuarios", data: users });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };
  getUserById = async (req, res) => {
    try {
      const { id } = req.params;
      const user = await User.findOne({
        where: { id },
        attributes: ["id", "username", "nombre", "apellido"],
        include: [{ model: Role, attributes: ["name"] }, { model: Product, attributes: ["id", "nombre", "marca", "modelo", "precio", "fotoURL", "stock", "userId"] }],
      });
      if (!user) throw new Error("No hay usuario con ese ID");
      res
        .status(200)
        .send({ success: true, message: "Todos lo usuarios", data: user });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  createUser = async (req, res) => {
    try {
      const { nombre, apellido, username } = req.body;

      const defaultRole = await Role.findOne({
        where: {
          name: "user",
        }
      })

      const user = await User.create({ nombre, apellido, username, roleId: defaultRole.id });
      if (!user) throw new Error("no se creo nada");
      res
        .status(200)
        .send({ success: true, message: "Usuario creado", data: user });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };
  updateUser = async (req, res) => {
    try {
      const { id } = req.params;
      const { nombre, apellido } = req.body;
      const user = await User.update(
        { nombre, apellido },
        {
          where: {
            id,
          },
        }
      );
      res
        .status(200)
        .send({ success: true, message: "Usuario modificado", data: user });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  deleteUser = async (req, res) => {
    try {
      const { id } = req.params;
      const user = await User.destroy({
        where: { id },
      });
      res
        .status(200)
        .send({ success: true, message: "Usuario modificado", data: user });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };
}

export default UserController;
