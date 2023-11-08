export const isAdmin = async (req, res, next) => {
    try {
      const { user } = req;
      if (user.role !== "Admin") throw new Error("no podes pasar");
      req.user = user;
      next();
    } catch (error) {
      res.status(401).send({ message: error.message });
    }
  };
  