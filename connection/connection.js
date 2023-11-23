import { Sequelize } from "sequelize";
import { environment } from "../config/config.js";

const connection = new Sequelize(environment.DATABASE_CONNECTION_URL, {
  dialect: environment.DIALECT, 
  ssl: true
})

try {
  await connection.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

export default connection;
