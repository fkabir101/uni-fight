const router = require("express").Router();
const eventRoutes = require("./events");
const userRouts = require("./users");

router.use('/events', eventRoutes);
router.use('/users', userRouts);

module.exports = router;