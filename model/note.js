var mongoose = require('mongoose');

const noteSchema = mongoose.Schema({
    title:{
        type: String,
       require: true 
    },
    user_id: {
        type: String,
        require: true
    },
    desc: {
        type: String,
        require: true
    },
    isDelete:{
        type: Number,
        default: 0
    }

});

const noteAddModel = module.exports = mongoose.model('note', noteSchema);