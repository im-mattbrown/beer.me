var mongoose = require("mongoose");
var Schema = mongoose.Schema;



Locations_TypesSchema = new Schema({
  TypeName: String,
  _location: {type: Schema.Types.ObjectId, ref: "Location"},
  _type: {type: Schema.Types.ObjectId, ref: "Type"}
});

// Toronado._id = 123456789;
//
// Taproom._id = 0987654321;
//
// joinTable = {
//   _location = Toronado._id,
//   _type = Taproom._id
// };



//Locations_Types.create(joinTable, function(err,succcess) {

//});
