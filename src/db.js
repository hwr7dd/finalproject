const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/groceries2');

module.exports = mongoose;