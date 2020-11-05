const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var schema = new Schema({
  timestamp: {type: Date, required: true}
});

module.exports = mongoose.model("loginRequest", schema);
