import User from "./User.js";
import Role from "./Role.js";
import Product from "./Product.js";

Role.hasMany(User, {
  foreignKey: 'roleId',
})
User.belongsTo(Role, {
  foreignKey: "roleId"
})
User.hasMany(Product,{
  foreignKey: 'userId'
})
Product.belongsTo(User,{
  foreignKey: 'userId'
})

export { User, Role, Product };
