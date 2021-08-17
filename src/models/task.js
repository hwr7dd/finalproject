const mongoose = require('../db');

const task = new mongoose.Schema({
    Name: { type: String, required: true },
    Quantity: { type: Number },
    edit: { type: Boolean, required: true, default: false }
});

const Task = mongoose.model('Task', task);

module.exports = Task;
// const mongoose = require('../db');

// const task = new mongoose.Schema({
//     title: { type: String, required: true },
//     done: { type: Boolean, default: false }
// });

// const Task = mongoose.model('Task', task);

// module.exports = Task;