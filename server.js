var express = require("express"),
    path = require("path"),
    app = express();


app.use(express.static(path.join(__dirname, 'public')));

app.get("/", function(req, res){
    res.sendFile("./public/index.html")
});








app.listen(process.env.PORT || 3000, function(){
    console.log("SERVER STARTED ON PORT 3000")
});