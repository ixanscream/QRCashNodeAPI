
User =  require('./models/user');

module.exports = function (app) {
    // get all users
    app.get('/api/users', function (req, res) {
        User.getUsers(function (err, users) {
            if (err) {
                throw err;
            }

            res.json(users);
        });
    });

    // auth user
    app.post('/api/signIn/', function (req, res) {
        var user = req.body;
        User.getUserByEmailAndPassword(user, function (err, user) {
            if (err) {
                throw err;
            }

            res.json(user);
        });
    });

    // get user by id
    app.get('/api/users/:_id', function (req, res) {
        User.getUserById(req.params._id, function (err, user) {
            if (err) {
                throw err;
            }

            res.json(user);
        });
    });

    // create user
    app.post('/api/users', function (req, res) {
        var user = req.body;
        User.addUser(user, function (err, user) {
            if (err) {
                throw err;
            }
            res.json(user);
        });
    });

    // update user
    app.put('/api/users/:_id', function (req, res) {
        var id = req.params._id;
        var user = req.body;
        User.updateUser(uid, user, {}, function (err, user) {
            if (err) {
                throw err;
            }

            res.json(user);
        });
    });

    app.delete('/api/users/:_id', function (req, res) {
        var id = req.params._id;
        User.removeUser(id, function (err, user) {
            if (err) {
                throw err;
            }

            res.json(user);
        });
    });
}