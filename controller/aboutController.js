const path = require("path");
const router = require("express").Router();

router.get("/", (req, res) => res.sendFile(path.join(__dirname, '../view/about.html')));

module.exports = router;
