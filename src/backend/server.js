const express = require('express');
const app = express();
require("dotenv").config();
const path = require('path');
const bodyParser = require("body-parser");

const api = require(path.join(__dirname, "/routes/api"));

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../../dist')));
app.use("/api", api);

app.get("/admin", (req, res) => {
  res.redirect("/admin.html");
});

app.listen(process.env.PORT, () => console.log(`Server Listening on Port: ${process.env.PORT}`));