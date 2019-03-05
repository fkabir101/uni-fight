const router = require("express").Router();
const eventController = require("../../controllers/eventController");

router.route("/create")
  .post(eventController.createEvent);

module.exports = router