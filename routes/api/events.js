const router = require("express").Router();
const eventController = require("../../controllers/eventController");

router.route("/create")
  .post(eventController.createEvent);

router.route("/:id")
  .get(eventController.getEventById)
module.exports = router