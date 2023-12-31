import express from "express";
import connection from "./connection/connection.js";
import router from "./routes/router.js";
import cookieParser from "cookie-parser";
import { seedRoles } from "./connection/seed.js";
import { environment } from "./config/config.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api", router);

app.use((_req, res, _next) => {
  res.status(404).json({ message: "404 Not found :(" });
});

await connection.sync({ force: false }).then(async () => {
  await seedRoles();
})

app.listen(environment.SERVER_PORT, () => {
  console.log("Server is running on port http://localhost:"+environment.SERVER_PORT);
});
