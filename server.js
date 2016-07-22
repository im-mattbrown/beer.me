var express = require('express'),
    app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

//serve static files from public folder
app.use(express.static(__dirname + '/public'));

//
app.use('/vendor', express.static(__dirname + '/bower_components'));

var controllers = require('./controllers');


//HTML endpoint
app.get('/', function homepage (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

//JSON API Endpoints
app.get('/api', controllers.api.index);

app.get('/api/locations', controllers.locations.index);


//listen on port 3000
app.listen(process.env.PORT || 3000);
