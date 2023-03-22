const mongoose  = require("mongoose");

const ticketSchema = mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    time : {
        type: String,
        required: true
    }
    ,
    date : {
        type: Date,
        required: true
    },
    rating : {
        type: Number,
        required: true
    },
    seat_avail : {
        type: Number,
        required: true
    },
    Duration : {
        type: String,
        required: true
    },
    description : {
        type: String,
        required: true
    }
})

const ticketModel = mongoose.model('tickets',ticketSchema)

module.exports = ticketModel;