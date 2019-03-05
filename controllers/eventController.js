const mongoose = require("mongoose");
const db = require("../models")

module.exports = {
  createEvent : function(req, res){
    db.Events
      .create(req.body)
      .then(dbModel => res.json({dbModel}))
      .catch(err => res.status(422).json(err));
   // res.json(req.body);
  }
}