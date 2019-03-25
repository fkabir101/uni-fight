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
      .find()
      .limit(4)
      .sort({ startUnix: 1 })
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
  //Where someone is added to an event
  // addAttendat : function(req, res){
  //     db.Events.findByIdAndUpdate(req.body.eventId, {$push: {"attendees": req.body.userId}}, {new: true, upsert: true})
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => {
  //       console.log(err);
  //       res.status(422).json(err);
  //     })
  // },

  addAttendat : function(req, res){
    db.Events.findById(req.body.eventId)
    .then(dbModel => {
      console.log(dbModel.attendees);
      console.log("userID"+req.body.userId);
      let isIn = false;
      for (let i=0; i<dbModel.attendees.length; i++) {
        let rope = dbModel.attendees[i].toString();
        console.log(rope);
        if (rope === req.body.userId)
        {isIn = true}
      }
        if (isIn) {
          res.json(dbModel);
        }
        else if (dbModel.attendees.length >= dbModel.limit) {
          res.json(dbModel);
        }
      else {
      db.Events.findByIdAndUpdate(req.body.eventId, {$push: {"attendees": req.body.userId}}, {new: true, upsert: true})
      .then(dbModel => res.json(dbModel))
      .catch(err => {
        console.log(err);
        res.status(422).json(err);
      })
    }
    })
  
},



  // addAttendat : function(req, res){
  //   db.Events.findbyId(req.body.eventId)
  //    // "attendees": {$in: mongoose.Types.ObjectId(req.user._id)}
  //   .then(dbModel =>{
  //     console.log(dbModel);
  //     res.json({status:true});
  //     // if (/*dbModel.includes(req.body.eventId)*/ null) {
  //     //   //if dbModel has user send an alert they already joined this event
  //     // }
  //     // else if (/*attendees.length >= limit*/ null) {
  //     //   //if event is full send an alert the event is full
  //     // }
  //     // else {
  //     //   //if user is not in event and event is not full
  //     //   db.Events.findByIdAndUpdate(req.body.eventId, {$push: {"attendees": req.body.userId}}, {new: true, upsert: true})
  //     //   .then(dbModel => res.json(dbModel))
  //     //   .catch(err => {
  //     //     console.log(err);
  //     //     res.status(422).json(err);
  //     //   })
  //     // }//else

  //   })//.then
//},
  findBySearch : function(req, res){
    console.log(req.query);
    db.Events.find(req.query)
    .then(dbModel => res.json(dbModel))
  },
  //this searches for a user in the partipants
  findByUser: function(req, res) {
    db.Events.find({
      "attendees": {$in: mongoose.Types.ObjectId(req.user._id)}
    })
    .then(dbModel => res.json(dbModel))
    .catch(err => res.json(err));
  }
};
