import { User, Role } from "../Models/index.js";

class UserController {
  constructor() {}
  getAllUsers = async (req, res) => {
    try {
      const users = await User.findAll({
        attributes: ["id", "name"],
        include: [{ model: Role, attributes: ["name"] }],
     //    where:{
     //      status:"active"
     //    }
      });
      //  if (users.length === 0) throw new Error("no hay usuarios");
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
        attributes: ["id", "name"],
        include: [{ model: Role, attributes: ["name"] }],
      });
      if (!user) throw new Error("no hay usuario");
      res
        .status(200)
        .send({ success: true, message: "Todos lo usuarios", data: user });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  createUser = async (req, res) => {
    try {
      const { name, email, roleId } = req.body;

      const user = await User.create({ name, email, roleId });
      //  console.log(`🚀 ~ UserController ~ createUser= ~ user:`, user)
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
      const { name, email, roleId } = req.body;
      const user = await User.update(
        { name, email, roleId },
        {
          where: {
            id,
          },
        }
      );
      //  console.log(`🚀 ~ UserController ~ updateUser= ~ user:`, user);
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
      console.log(`🚀 ~ UserController ~ deleteUser ~ user:`, user)
      res
        .status(200)
        .send({ success: true, message: "Usuario modificado", data: user });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };
}

export default UserController;
