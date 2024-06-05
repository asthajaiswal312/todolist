//requiring all the needed modules

const express = require('express')
const bodyParer = require("body-parser")
const bodyParser = require('body-parser')
app = express()
port = 3000
var newListItems = ["eat", "sleep", "repeat"]

//setting body-parser
app.use(bodyParser.urlencoded({extended:true}))

app.use(express.static("public"))

//setting view engine to ejs
app.set('view engine', 'ejs')

app.get("/", (req, res) => {
    var today = new Date()
    var currentDay = today.getDay()
    var day = ""

    var options = {  weekday: 'long', month: 'long', day: 'numeric'};
    var day = today.toLocaleString('en-us', options);

    res.render('list', {kindOfDay : day, newListItems: newListItems})
})

app.post("/", (req, res) => {
    var item = req.body.newItem
    newListItems.push(item)
    res.redirect("/")
})

app.listen(port, () => {
    console.log("server is runnning on port 3000.")
})