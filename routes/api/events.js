const router = require("express").Router();
const eventController = require("../../controllers/eventController");

router.route("/create")
  .post(eventController.createEvent);

router.route("/:id")
  .get(eventController.findById)
  .put(eventController.update)
  .delete(eventController.remove);

module.exports = router