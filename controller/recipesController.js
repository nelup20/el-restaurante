const path = require("path");
const {getEmailData, nodeMailerConfig} = require("../config");
const nodemailer = require("nodemailer");
const router = require("express").Router();

const transporter = nodemailer.createTransport(nodeMailerConfig);

router.get("/", (req, res) => res.sendFile(path.join(__dirname, '../view/recipes.html')));

router.post("/", (req, res) => {
    res.redirect("back")

    transporter.sendMail(getEmailData(req.body.email))
               .then(result => console.log(result))
               .catch(error => console.error(error)); // TODO: error handling
});

module.exports = router;
