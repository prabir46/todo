var mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
    user_id: {
        type: String,
        require: true
    },
    task: {
        type: String,
        require: true
    },
    isChecked: {
        type: Boolean,
        require: true,
        default: false
    }
});

const todoAddModel = module.exports = mongoose.model('todo', todoSchema);