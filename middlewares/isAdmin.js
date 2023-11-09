export const isAdmin = async (req, res, next) => {
  try {
    const { user } = req;
    console.log({user});
    if (!user || !user.role || user.role !== "Admin") {
      throw new Error("Solo los admins puede ver esto 🕵️");
    }

    req.user = user;
    next();
  } catch (error) {
    res.status(401).send({ message: error.message });
  }
};
