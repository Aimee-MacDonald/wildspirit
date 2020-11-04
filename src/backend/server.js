const express = require('express');
const app = express();
require("dotenv").config();
const path = require('path');
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const api = require(path.join(__dirname, "/routes/api"));

mongoose.connect(process.env.DBURL, {useNewUrlParser: true, useUnifiedTopology: true});

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "/views"));

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../../dist')));
app.use("/api", api);

app.get('/', (req, res) => {
  res.status(200).render("index");
});

app.get("/admin", (req, res) => {
  res.status(200).render('admin');
});

app.listen(process.env.PORT, () => console.log(`Server Listening on Port: ${process.env.PORT}`));