var express = require('express');
var app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.post('/', function (req, res) {
    console.log(req.body);
    res.json("hello!");
});

app.listen(3000, function () {
    console.log('App listening on port 3000!');
});