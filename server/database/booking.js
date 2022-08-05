const mongoose = require('mongoose');

let booking = new mongoose.Schema({

    room_id:{
        type: String,
        required: true
    },
    user_id:{
        type: String,
        required: true
    },
    room_details:{
        type: String,
        require : true
    },
    payment:{
        type: String,
        required: true
    },    
    status:{
        type: String,
        required: true,
        default: 'checkIn'
    },
    receipt_url:{
        type: String,
        required: true
    },
    date: {
        type: String,
        default: Date.now()
    }

});


const bookings = mongoose.model("bookings", booking);

module.exports = bookings;