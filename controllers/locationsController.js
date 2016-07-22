db = require('../models');

function index(req, res) {
  db.Location.find(function (err, locations){
    if (err) { return console.log("index error: " + err);}
    res.json(locations);
  });
}

function create(req, res) {
  db.Location.create(req.body, function(err,newLocation) {
    if (err) { return console.log("show error: " + err); }
    res.json(newLocation);
  });
}

function show(req, res) {

}

function destroy(req, res) {

}

function update(req, res) {

}

module.exports = {
  index: index,
  create: create,
  show: show,
  destroy: destroy,
  update: update
};
