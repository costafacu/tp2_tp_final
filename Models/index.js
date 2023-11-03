import User from "./User.js";
import Role from "./Role.js";
import Product from "./Product.js";
import ProductFavorito from "./ProductFavorito.js";


Role.hasMany(User, {
  foreignKey: 'roleId',
})
User.belongsTo(Role, {
  foreignKey: "roleId"
})
User.hasMany(Product, {
  foreignKey: 'userId'
})
Product.belongsTo(User, {
  foreignKey: 'userId'
})
User.belongsToMany(Product, { through: ProductFavorito });
Product.belongsToMany(User, { through: ProductFavorito });

export { User, Role, Product, ProductFavorito };
