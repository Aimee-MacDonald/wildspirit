const express = require('express');
const app = express();
const path = require('path');

require("dotenv").config();

app.use(express.static(path.join(__dirname, '../../dist')));

app.listen(process.env.PORT, () => console.log(`Server Listening on Port: ${process.env.PORT}`));
