const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var schema = new Schema({
  name: {type: String, required: true},
  description: {type: String, required: true},
  imageURL: {type: String, required: true},
  imageAlt: {type: String, required: true},
  category: {type: String, required: true}
});

module.exports = mongoose.model("exploreOption", schema);
