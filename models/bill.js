var mongoose = require('mongoose');

var BillSchema = mongoose.Schema({
    amount: {
        type: Integer
    },
    bill_reff: {
        type: String
    },
    bill_date: {
        type: Date
    },
    deleted: {
        type: Boolean
    },
    paid: {
        type: Boolean
    },
    paid_date :{
        type: Date
    },
    user_id : {
        type : String
    }
});