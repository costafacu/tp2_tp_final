import Role from "../Models/Role.js";

class RoleController {
  contructor() { }

  getAllRoles = async (req, res) => {
    try {
      const roles = await Role.findAll()
      res.status(200).send({ success: true, message: "Todos los roles", data: roles });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };
  getRoleById = async (req, res) => {
    try {
      const role = await Role.findOne({
        where: {
          id: req.params.id
        }
      })

      if (!role) {
        throw new Error("no se encontro el rol con esa ID")
      }
      res.status(200).send({ success: true, message: "Role por id", data: role });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };
  createRole = async (req, res) => {
    try {
      const { name } = req.body;
      const role = await Role.create({ name });
      if (!role) throw new Error("no se puede crear");
      res.status(200).send({ success: true, message: "Role creado", role });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };
  updateRole = async (req, res) => {
    try {
      const { name } = req.body;
      const { id } = req.params;
      const role = await Role.update({ name }, { where: { id } });
      res
        .status(200)
        .send({ success: true, message: "Role modificado", data: role });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  deleteRole = async (req, res) => {
    try {
      const { id } = req.params;
      const role = await Role.destroy({
        where: { id },
      });
      res
        .status(200)
        .send({ success: true, message: "Role eliminado", data: role });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };
}

export default RoleController;
