var express = require("express")

var app = express()

app.get("/", function(req,resp){
    
    resp.render("index.ejs", {title: "hellocska"})
})

app.get("/about", function(req,resp){
    
    resp.render("layout.ejs", {title: "About us", body:"<h2>We are cool.js<h2>"})
})

app.get("/*", function(req,resp){
    
    resp.status(404).render("sucka.ejs")
})


//c9.io environment specific PORT
app.listen(process.env.PORT, function() {console.log("app.js listening")});
