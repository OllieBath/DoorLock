const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    lock: {
        type: Number,
        required: true
    },
    timestamp: {
        type: Number,
        required: true
    }
});

const lockDB = mongoose.model('lockdb', schema);

module.exports = {
    method: lockDB
};