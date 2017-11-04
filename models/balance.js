var mongoose = require('mongoose');

var BalanceSchema = mongoose.Schema({
    amount: {
        type: Integer
    },
    user_id : {
        type : String
    }
});