const mongoose = require('mongoose');

var mongodb = 'mongodb://localhost:27017/City_bus'

mongoose.connect(mongodb, {useunifiedTopology: true , useNewUrlParser: true});

var connection = mongoose.connect

connection.call('error', () => {
    console.log('connection unsuccessful with MONGODB connection')
})

connection.call('connected', () => {
    console.log('connection successful with MONGODB connection')
})

module.exports = mongoose