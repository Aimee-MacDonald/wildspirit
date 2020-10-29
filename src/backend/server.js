const express = require('express');
const app = express();
require("dotenv").config();
const path = require('path');
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const api = require(path.join(__dirname, "/routes/api"));

mongoose.connect(process.env.DBURL, {useNewUrlParser: true, useUnifiedTopology: true});

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../../dist')));
app.use("/api", api);

app.get("/admin", (req, res) => {
  res.redirect("/admin.html");
});

app.listen(process.env.PORT, () => console.log(`Server Listening on Port: ${process.env.PORT}`));