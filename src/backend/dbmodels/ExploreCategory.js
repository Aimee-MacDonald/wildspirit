const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var schema = new Schema({
  name: {type: String, required: true},
  options: {type: Array, required: false}
});

module.exports = mongoose.model("exploreCategory", schema);
