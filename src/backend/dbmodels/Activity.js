const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var schema = new Schema({
  category: {type: String, required: true},
  name: {type: String, required: true},
  description: {type: String, required: true},
  image: {type: String, required: true}
});

module.exports = mongoose.model("activity", schema);
