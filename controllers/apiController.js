function index(req, res) {
  res.json({
    message: "Welcome to beer.me!",
    documentation_url: "https://github.com/mattericbrown/brewfinder",
    base_url: "https://beer-me-sf.herokuapp.com/",
    endpoints: [
      {method: "GET", path: "/api", description: "Describes available endpoints"}
    ]
  });
}

module.exports.index = index;
