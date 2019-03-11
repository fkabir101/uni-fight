const mongoose = require("mongoose");
const db = require("../models")

module.exports = {
  createEvent: function (req, res) {
    db.Events
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findAll: function (req, res) {
    db.Events
      .find({})
      // .sort({ start: 1 })
      .then(dbModel => {
        res.json(dbModel)
      })
      .catch(err => {
        console.log(err);
        res.status(422).json(err)
      });
  },
  findById: function (req, res) {
    db.Events
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByCreatorId: function (req, res) {
    db.Events
      .findById(req.params.creator)
      .then(dbModel => res.json({ dbModel}))
      .catch(err => res.status(422).json(err));
  },
  update: function (req, res) {
    db.Events
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Events
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  getEventById: function (req, res) {
    db.Events
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  addAttendat : function(req, res){
      db.Events.findByIdAndUpdate(req.body.eventId, {$push: {"attendees": req.body.userId}}, {new: true, upsert: true})
      .then(dbModel => res.json(dbModel))
      .catch(err => {
        console.log(err);
        res.status(422).json(err);
      })
  },
  findBySearch : function(req, res){
    console.log(req.query);
    db.Events.find(req.query)
    .then(dbModel => res.json(dbModel))
  }
};
