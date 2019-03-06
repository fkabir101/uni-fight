const mongoose = require("mongoose");
const db = require("../models")

module.exports = {
  createEvent: function (req, res) {
    db.Events
      .create(req.body)
      .then(dbModel => res.json({ dbModel }))
      .catch(err => res.status(422).json(err));
  },
  findAll: function (req, res) {
    db.Events
      .find(req.query)
      .sort({ start: 1 })
      .then(dbModel => res.json({ dbModel }))
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Events
      .findById(req.params.id)
      .then(dbModel => res.json({ dbModel }))
      .catch(err => res.status(422).json(err));
  },
  update: function (req, res) {
    db.Events
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json({ dbModel }))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Events
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json({ dbModel }))
      .catch(err => res.status(422).json(err));
  },
  getEventById : function(req, res){
    db.Events
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};