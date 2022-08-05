const mongoose = require('mongoose');

let room = new mongoose.Schema({
 
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    type:{
        type: String,
        require: true
    },
    price:{
        type: String,
        required: true
    },    
    facility:{
        type: String,
        required: true
    },
    image:{
        type: String,
        required: true
    },
    date: {
        type: String,
        default: Date.now()
    },
    status: {
        type: String,
        default: 'none'
    }

});

const rooms = mongoose.model("rooms", room);

module.exports = rooms;