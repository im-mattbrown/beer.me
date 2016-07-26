var mongoose = require("mongoose");
mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/brewfinder");

module.exports.api = require('./apiController');
module.exports.locations = require('./locationsController');
module.exports.users = require('./usersController');
