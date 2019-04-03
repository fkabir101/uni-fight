const router = require("express").Router();
const eventRoutes = require("./events");
const userRouts = require("./users");
const emailRoutes = require("./emailRoutes");

router.use('/events', eventRoutes);
router.use('/users', userRouts);
router.use("/email", emailRoutes);

module.exports = router;