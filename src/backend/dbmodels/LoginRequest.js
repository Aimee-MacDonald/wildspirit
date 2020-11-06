const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var schema = new Schema({
  timestamp: {type: Number, required: true}
});

module.exports = mongoose.model("loginRequest", schema);
