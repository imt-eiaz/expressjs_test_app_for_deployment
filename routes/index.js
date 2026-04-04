var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Namaste Byets - Imtiaz Aslam Khan Profile" });
});

module.exports = router;
