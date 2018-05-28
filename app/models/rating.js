var mongoose = require('mongoose');

module.exports = mongoose.model('Rating', {
    name: {
        type: String,
        default: ''
    },
    comments: {
        type: String,
        default: ''
    },
    p1p1: {
        type: Number,
        default: ''
    },
    draftsim: {
        type: Number,
        default: ''
    },
    lr: {
        type: Number,
        default: ''
    },
    powerranking: {
        type: Number,
        default: ''
    }
});