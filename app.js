import express from "express";
import connection from "./connection/connection.js";
import router from "./routes/router.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);

await connection.sync({ force: false })

app.listen(8080, () => {
  console.log("Server is running on port http://localhost:8080");
});
