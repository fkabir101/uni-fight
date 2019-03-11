const db = require('../models');
const User = require('../models/Users');
const passport = require('passport');

module.exports = {
  findAll: function (req, res) {
    db
      .User
      .find(req.query)
      .sort({ date: 1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    db
      .User
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    db
      .User
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function (req, res) {
    User.findOneAndUpdate({
      _id: req.params.id
    }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    db
      .User
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  register: function (req, res) {
    /* To create a new user */
    User
      .register(new User({ username: req.body.username, email: req.body.email }), req.body.password, function (err) {
        if (err) {
          console.log('error while user register!', err);
          return res.status(422).json(err);
        }
        console.log('user registered!');

        passport.authenticate('local')(req, res, function () {
          // redirect user or do whatever you want
          if (err) {
            console.log('error while user login!', err);
            return res.status(422).json(err);
          }
          console.log('user logged in!');
          res.json(true);
        });
      });
  }
};
