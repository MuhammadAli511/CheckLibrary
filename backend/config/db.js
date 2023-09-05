var mongoose = require('mongoose');
var dotenv = require('dotenv');
dotenv.config();
var dbURI = 'mongodb+srv://ali:PhnkC7NSZl7kLTkr@cluster0.70l1rir.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.on('connected', function () {
    console.log('Mongoose connected to database successfully');
});

mongoose.connection.on('error', function (err) {
    console.log('Mongoose connection error: ' + err);
});

mongoose.connection.on('disconnected', function () {
    console.log('Mongoose disconnected');
});
