const express = require('express');
const app = express();
const path = require('path');
const axios = require('axios');

require("dotenv").config();

app.use(express.static(path.join(__dirname, '../../dist')));

app.get('/api/weather', (req, res) => {
  axios.get(process.env.WEATHERDATA)
    .then(response => {
      const respac = {
        "description": response.data.weather[0].description,
        "temperature": Math.floor(response.data.main.temp - 273.15)
      }

      res.status(200).json(respac);
    })
    .catch(error => {
      res.status(504).json(null);
    })
});

app.listen(process.env.PORT, () => console.log(`Server Listening on Port: ${process.env.PORT}`));
