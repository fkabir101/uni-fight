const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description : {
    type: String,
    required: true
  },
  venue: {
    type: String,
    required: true
  },
  limit: {
    type: Number,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  category: {
    type: Array,
    required: true
  },
  attendees: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref:"User"
    }
  ],
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  start :{
    type: String,
    required: true
  },
  end : {
    type: String,
    required: true
  }
});

const Event = mongoose.model("Event",EventSchema);

module.exports = Event;