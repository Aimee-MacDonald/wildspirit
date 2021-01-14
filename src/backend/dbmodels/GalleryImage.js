const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var schema = new Schema({
  imgName: {type: String, require: true},
  imgURL: {type: String, required: true},
  imgAlt: {type: String, required: true}
});

module.exports = mongoose.model("galleryImage", schema);
