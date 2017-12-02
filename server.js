var express = require("express"),
    path = require("path"),
    app = express();

app.set("view engine", "html");
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", function(req, res){
    res.sendFile("/index.html");
});

app.get("/shop", function(req, res){
    res.sendFile(path.join(__dirname, 'public/shop.html'));
});

app.get("/recipes", function(req, res){
    res.sendFile(path.join(__dirname, "public/recipes.html"));
});






app.listen(process.env.PORT || 3000, function(){
    console.log("SERVER STARTED ON PORT 3000")
});