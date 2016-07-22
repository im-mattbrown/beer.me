var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var LocationSchema = new Schema({
  name: String,
  location: String,
  lat: Number,
  long: Number,
  rating: Number
});

var Location = mongoose.model('Location', LocationSchema);

module.exports = Location;
