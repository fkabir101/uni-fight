const router = require("express").Router();
const eventController = require("../../controllers/eventController");

router.route("/create")
  .post(eventController.createEvent);
router.route("/attend")
  .put(eventController.addAttendat)
router.route("/search")
  .get(eventController.findBySearch)
router.route("/get")
  .get(eventController.findAll);
router.route("/user")
  .get(eventController.findByUser);

router.route("/:id")
  .get(eventController.getEventById)
module.exports = router