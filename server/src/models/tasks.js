const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    isCompleted: {
        type: Boolean,
        default: false
    },
    creator: { type: mongoose.Schema.Types.ObjectId, ref: 'Users' },
    estado: {
        type: Number,
        default: 1
    }
});

module.exports = mongoose.model('Task', taskSchema);