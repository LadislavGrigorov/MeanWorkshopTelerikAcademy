var express = require('express'),
    bodyParser = require('body-parser'),
    logger = require('morgan'),
    mongoose = require('mongoose');


var app = express(),
    env = process.env.NODE_ENV || 'development',
    port = 3000;

mongoose.connect('mongodb://localhost/telerikacademycourses');
var db = mongoose.connection;
var messageFromDb;

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

var messageSchema = mongoose.Schema({
    message: String
});

var Message = mongoose.model('Message', messageSchema);

Message.remove({}).exec(function (err) {
    if (err) {
        console.log('Message can not be cleared: ' + err);
        return;
    }

    console.log('Messages deleted...')

    Message.create({message: 'Hi from mongosose'})
        .then(function (model) {
            if (model) {
                messageFromDb = model.message;
                console.log(model.message);
            }
        });
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
    res.render('index', {message: messageFromDb});
});

app.listen(port);

console.log('Server running on port ' + port);