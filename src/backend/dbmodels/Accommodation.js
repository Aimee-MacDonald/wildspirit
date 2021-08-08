const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var schema = new Schema({
  title: {type: String, required: true},
  description: {type: String, required: true},
  price: {type: String, required: true},
  images: {type: Array, required: false}
});

module.exports = mongoose.model("accommodation", schema);
