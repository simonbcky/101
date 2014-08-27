var express = require("express")
var jade = require("jade")

var portNo = process.env.PORT

var app = express()

console.log("express inited")

app.set('views',__dirname + "../views")
app.set("view engine", "jade")

console.log("jade inited")

app.use(express.static(__dirname+"../client"))

app.get("/",function(req,res){
    
    res.render("index.html")
})

app.listen(portNo, function() {console.log("index.js listening")})