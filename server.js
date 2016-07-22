var express = require('express'),
    app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/public'));

app.use('/vendor', express.static(__dirname + '/bower_components'));

var controllers = require('./controllers');

app.get('/', function homepage (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});



//listen on port 3000
app.listen(process.env.PORT || 3000);
