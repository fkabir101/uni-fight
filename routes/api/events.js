const router = require("express").Router();
const eventController = require("../../controllers/eventController");

router.route("/create")
  .post(eventController.createEvent);
router.route("/attend")
  .put(eventController.addAttendat)
router.route("/search")
  .get(eventController.findBySearch)
router.route("/:id")
  .get(eventController.getEventById)
module.exports = router