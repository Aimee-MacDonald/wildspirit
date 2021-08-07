const mongoose = require("mongoose")
const Schema = mongoose.Schema

var schema = new Schema({
  quoteText: {type: String, required: true}
})

module.exports = mongoose.model("quote", schema)