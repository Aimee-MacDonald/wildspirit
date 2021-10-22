const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var schema = new Schema({
  imgURL: {type: String, required: true},
  imageID: {type: String, required: true},
  imgAlt: {type: String, required: true},
  title: {type: String, required: true},
  subtitle: {type: String, required: true},
  description: {type: String, required: true},
  linkText: {type: String, required: false},
  linkURL: {type: String, required: false}
});

module.exports = mongoose.model("event", schema)