db = require('../models');

function index(req, res) {
  db.Location.find(function (err, locations){
    if (err) { return console.log("index error: " + err);}
    res.json(locations);
  });
}

function create(req, res) {
  var locationInput = req.body;
  db.Location.create(locationInput, function(err,newLocation) {
    if (err) { return console.log("show error: " + err); }
    console.log(newLocation);
    res.json(newLocation);
  });
}

function show(req, res) {
  db.Location.findById(req.params.id, function(err, foundLocation){
    if(err) {console.log('locationsController.show error', err); }
    res.json(foundLocation);
  });

}

function destroy(req, res) {
  var locationId = req.params.id;
  db.Location.findOneAndRemove({ _id: locationId }, function(err, deletedLocation){
    res.json(deletedLocation);
  });
}

function update(req, res) {
  db.Location.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, location){
    if (err) { return console.log("show error: " + err); }
    res.json(location);
  });
}

function info(req, res) {
  db.Location.findById(req.params.id, function(err, foundLocation){
    res.json(foundLocation);
  });
}

module.exports = {
  index: index,
  create: create,
  show: show,
  destroy: destroy,
  update: update,
  info: info
};
