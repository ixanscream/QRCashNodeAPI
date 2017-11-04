express = require('express');
app = express();
bodyParser =  require('body-parser');
mongoose = require('mongoose');

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

    // intercept OPTIONS method
    if ('OPTIONS' == req.method) {
      res.send(200);
    }
    else {
      next();
    }
};

app.use(bodyParser.json());
app.use(allowCrossDomain);

// connect to mongoose
mongoose.connect('mongodb://localhost/qrapi');
var db = mongoose.connection;

// When successfully connected
db.on('connected', function() {
    console.log('Mongo DB connection open for DB');
});

app.get('/', function (req, res) {
    res.send("QR API!");
});

// api
require('./routes')(app);


app.listen(3000);
console.log('connected to node api');