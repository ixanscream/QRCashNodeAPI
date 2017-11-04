var mongoose = require('mongoose');

//qruser schema
var UserSchema = mongoose.Schema({
    email: {
        type: String
    },
    password: {
        type: String
    },
    name: {
        type: String
    },
    firstname: {
        type: String
    },
    lastname: {
        type: String
    },
    phone: {
        type: String
    },
    activation_code: {
        type: String
    },
    activated: {
        type: Boolean
    },
    code: {
        type: String
    },
    address: {
        type: String
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});

var User = module.exports = mongoose.model('user', UserSchema);

// get User
module.exports.getUsers = function (callback, limit) {
    //get qr user callback any, limit integer
    User.find(callback).limit(limit);
}

// get user by id
module.exports.getUserById = function (id, callback) {
    //get qr user callback any, limit integer
    User.findById(id, callback);
}

//create new qruser
module.exports.addUser = function (user, callback) {
    //create new user
    User.create(user, callback);
}

//create update ruser
module.exports.updateUser = function (id, user, options, callback) {
    //create new user
    var query = {
        _id: id
    };
    var update = {
        name: user.name,
        password: user.password,
        firstname: user.firstname,
        lastname: user.lastname,
        phone: user.phone,
        activated: user.activated,
        code: user.code,
        address: user.address,
        created_date: Date.now
    };
    User.findOneAndUpdate(query, update, options);
}

// remove user by id
module.exports.removeUser = function (id, callback) {
    var query = {
        _id: id
    };
    User.remove(query, callback);
}


// get user by email and password
module.exports.getUserByEmailAndPassword = function (user, callback) {
    //create new user
    var query = {
        email: user.email,
        password: user.password
    };
    User.find(query, callback).limit(1);
}