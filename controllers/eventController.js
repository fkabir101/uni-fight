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
        // console.log(dbModel);
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
      .then(dbModel => res.json( dbModel ))
      .catch(err => res.status(422).json(err));
  },
  getEventById : function(req, res){
    db.Events
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  addAttendat : function(req, res){
    console.log(req.body);
    // db.Events
    //   .findById(req.body.eventId)
    //   .then(dbModel => dbModel.update(
    //     { "$push": { "attendees": req.body.userId } },
    //     { "new": true, "upsert": true },))
    //   .then(dbModel => res.json({ dbModel }))
    //   .catch(err => res.status(422).json(err));

      db.Events.findByIdAndUpdate(req.body.eventId, {$push: {"attendees": req.body.userId}}, {new: true, upsert: true})
      .then(dbModel => res.json(dbModel))
      .catch(err => {
        console.log(err);
        res.status(422).json(err);
      })
  }
};
/*
Model.findAndUpdate({_id: 'your_id'}, 
                    {$push: {'your_array_field': 
                    {"name": "foo","idAccount": 123456}}}, 
                    {new: true}, (err, result) => {
                    // Rest of the action goes here
                   })
*/