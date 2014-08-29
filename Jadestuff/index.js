var express = require("express")
var jade = require("jade")

var portNo = process.env.PORT

var app = express()

console.log("express inited")

app.set('views',__dirname + "/views")
app.set("view engine", "jade")

console.log("jade inited")

//css, img etc coming from:
var path= __dirname+"/../client"
console.log(path)

app.use(express.static(path))

app.get("/d",function(req,res){    res.render("default") 
})

app.get("/j",function(req,res){    res.render("index", {title:"Jadeism"}) 
})



app.listen(portNo, function() {console.log("index.js listening")})