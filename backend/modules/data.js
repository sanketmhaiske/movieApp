const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Movies')
var conn = mongoose.connection;

var MovieData = new mongoose.Schema({
    ThumbnailLink: String,
    Name: String,
    Rating: String,
    RealeaseDate: String,
})

var Datamodel = new mongoose.model('Movie', MovieData);
module.exports = Datamodel;