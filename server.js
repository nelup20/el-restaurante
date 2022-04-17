const express = require("express"),
      path = require("path"),
      app = express(),
      bodyParser = require("body-parser"),
      paypal = require("paypal-rest-sdk");

const {paypalConfig} = require("./config");

const indexController = require("./controller/indexController");
const shopController = require("./controller/shopController");
const recipesController = require("./controller/recipesController");
const newsController = require("./controller/newsController");
const aboutController = require("./controller/aboutController");
const contactController = require("./controller/contactController");

const PORT = process.env.PORT || 8080;

app.set("view engine", "html");
app.use(express.static(path.join(__dirname, 'view')));
app.use(bodyParser.urlencoded({extended: true}));

paypal.configure(paypalConfig);

app.use("/", indexController);
app.use("/shop", shopController)
app.use("/recipes", recipesController)
app.use("/news", newsController)
app.use("/about", aboutController)
app.use("/contact", contactController)

app.use((req, res) => {
    res.status(404);
    res.redirect("back");
});

app.listen(PORT, () => console.log(`Server started on Port ${PORT}: http://localhost:${PORT}/`));
