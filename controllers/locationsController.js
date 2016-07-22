db = require('../models');

function index(req, res) {
  db.Location.find(function (err, locations){
    if (err) { return console.log("index error: " + err);}
    res.json(albums);
  });
}

function create(req, res) {

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
