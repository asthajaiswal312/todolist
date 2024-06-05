//requiring all the needed modules

const express = require('express')
const bodyParer = require("body-parser")
const bodyParser = require('body-parser')
app = express()
port = 3000

//setting body-parser
app.use(bodyParser.urlencoded({extended:true}))

//setting view engine to ejs
app.set('view engine', 'ejs')

app.get("/", (req, res) => {
    var today = new Date()
    var currentDay = today.getDay()
    var day = ""

    var options = {  weekday: 'long', month: 'long', day: 'numeric'};
    var day = today.toLocaleString('en-us', options);

    console.log(day);

    res.render('list', {kindOfDay : day})
})

app.post("/", (req, res) => {
    var newItem = req.body.newItem
    console.log(newItem)
})

app.listen(port, () => {
    console.log("server is runnning on port 3000.")
})