/* eslint-disable no-console */
const express = require("express");
require("dotenv").config();
const cors = require("cors");
const helmet = require("helmet");
const router = require("./router");

const db = require("./models/index");

const app = express();
const port = process.env.PORT || 3001;

app.use(helmet());
app.use(cors());
app.use(express.json());

app.use("/", router);

(async function bootstrap() {
  await db.sequelize.sync();
  app.listen(port, () => {
    console.log(`Listening to server http://localhost:${port}`);
  });
})();
