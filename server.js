var express = require("express"),
    path = require("path"),
    app = express(),
    bodyParser = require("body-parser"),
    nodemailer = require("nodemailer"); 

app.set("view engine", "html");
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile("/index.html");
});

app.get("/shop", function(req, res){
    res.sendFile(path.join(__dirname, 'public/shop.html'));
});

app.get("/recipes", function(req, res){
    res.sendFile(path.join(__dirname, "public/recipes.html"));
});

app.post("/recipes", function(req, res){
    res.redirect("back")
    var sendEmail = req.body.email;
    var transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "nplatonovbusiness@gmail.com",
            pass: "" // Put password here
        }
    });
    var mailOptions = {
        from: "nplatonovbusiness@gmail.com",
        to: sendEmail,
        subject: "El Restaurante Recipe Book !",
        html: "<h2>Please enjoy our attached recipe book ! :)</h2>",
        attachments: [
            {
                filename: "ElRestauranteBook.pdf",
                path: "./attachments/ElRestauranteBook.pdf"
            }
        ]
    };
    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            console.log(error);
            console.log("Something went wrong");
        } else {
            console.log("Message sent: " + info.response);
            console.log("Everything worked fine!")
        }
    });

});





app.listen(process.env.PORT || 3000, function(){
    console.log("SERVER STARTED ON PORT 3000")
});