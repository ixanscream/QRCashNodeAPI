var mongoose = require('mongoose');

var PaymentSchema = mongoose.Schema({
    amount: {
        type: Integer
    },
    payment_reff: {
        type: String
    },
    payment_date: {
        type: Date
    },
    deleted: {
        type: Boolean
    },
    bill_id : {
        type : String
    },
    user_id : {
        type : String
    }
});