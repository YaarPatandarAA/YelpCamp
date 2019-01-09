const express = require("express");
const app = express();
app.set("view engine", "ejs");
const port = 3000;

app.get("/", function (req, res) {
    res.render("landing")
});

app.get("/campgrounds", function (req, res) {
    
});

app.listen(port, function() {
    console.log("The YelpCamp Server has Started!");
});