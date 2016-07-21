var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/tunely");

module.exports.Location = require('./location.js');
module.exports.Users = require('./users.js');
