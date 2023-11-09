import User from "./User.js";
import Role from "./Role.js";
import Product from "./Product.js";


Role.hasMany(User, {
  foreignKey: 'roleId',
})
User.belongsTo(Role, {
  foreignKey: "roleId"
})
User.hasMany(Product, {
  foreignKey: 'userId',
  as: 'products'
})
Product.belongsTo(User, {
  foreignKey: 'userId',
  as: 'user'
})
User.belongsToMany(Product, { through: 'ProductFavorito', as: 'likes' });
Product.belongsToMany(User, { through: 'ProductFavorito', as: 'likedBy' });

export { User, Role, Product };
