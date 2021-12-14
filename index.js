const express = require("express");
const helmet = require("helmet");
const config = require("./v1/src/loaders");
const loaders = require("./v1/src/config");
const { UserRoutes, FactoryRoutes, UnitRoutes } = require("./v1/src/routes");
var cors = require("cors");
config();
loaders();

const app = express();
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
app.use(helmet());

app.listen(process.env.APP_PORT, () => {
  console.log(`Server is running on port ${process.env.APP_PORT}`);
  app.use("/users", UserRoutes);
  app.use("/factories", FactoryRoutes);
  app.use("/units", UnitRoutes);
});
