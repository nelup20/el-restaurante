const path = require("path");
const paypal = require("paypal-rest-sdk");
const {getPaypalPaymentData} = require("../config");
const router = require("express").Router();

router.get("/", (req, res) => res.sendFile(path.join(__dirname, '../view/shop.html')));

router.post("/buy", (req, res) => {
    paypal.payment.create(getPaypalPaymentData(req.body.price, req.body.quantity), (error, payment) => {
        if (error) throw error; // TODO: better error handling (logging, show errorMsg to user)

        res.redirect(payment.links.find(link => link.rel === "approval_url").href);
    });
});

module.exports = router;
