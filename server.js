var express = require('express'),
    bodyParser = require('body-parser'),
    logger = require('morgan'),
    mongoose = require('mongoose');


var app = express(),
    env = process.env.NODE_ENV || 'development',
    port = process.env.PORT || 3000;

if (env=='development'){
    mongoose.connect('mongodb://localhost/telerikacademycourses');
}
else{
    mongoose.connect('mongodb://pesho:gosho@ds039341.mongolab.com:39341/telerikacademycourses');
}

var db = mongoose.connection;
db.once('open', function (err) {
    if (err) {
        console.log(err);
        return;
    }

    console.log('Database running!')
});

db.on('error', function (err) {
    console.log(err);
});

app.set('view engine', 'jade');
app.set('views', __dirname + '/server/views');
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

app.get('/partials/:partialName', function (req, res) {
    res.render('partials/' + req.params.partialName);
});

app.get('*', function (req, res) {
    res.render('index');
});

app.listen(port);

console.log('Server running on port ' + port);