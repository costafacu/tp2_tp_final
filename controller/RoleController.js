import Role from "../Models/Role.js";

class RoleController {
  contructor() {}

  getAllRoles = async (req, res) => {
    try {
      res.send("hola");
    } catch (error) {}
  };
  getRoleById = async (req, res) => {
    try {
    } catch (error) {}
  };
  createRole = async (req, res) => {
    try {
      const { name } = req.body;
      // if (name.length > 0) throw new Error("no puede estar vacio");
      const role = await Role.create({ name});
      // console.log(`🚀 ~ RoleController ~ createRole= ~ role:`, role)
      if (!role) throw new Error("no se puede crear");
      res.status(200).send({ success: true, message: "Role creado", role });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };
  updateRole = async (req, res) => {
    try {
    } catch (error) {}
  };

  deleteRole = async (req, res) => {
    try {
    } catch (error) {}
  };
}

export default RoleController;
