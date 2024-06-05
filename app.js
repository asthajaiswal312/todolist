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

    switch (currentDay) {
        case 1:
            day = "Monday"
            break;
        case 2:
            day = "Tuesday"
            break;
        case 3:
            day = "Wednesday"
            break;
        case 4:
            day = "Thursday"
            break;
        case 5:
            day = "Friday"
            break;
        case 6:
            day = "Saturday"
            break;
        case 0:
            day = "Sunday"
            break;
        default:
            console.log("error")
            break;
    }

    res.render('list', {kindOfDay : day})
    // if(currentDay === 6 || currentDay === 0)
    //     {
    //         day = "weekday"
    //         res.render('list', {kindOfDay : day})
    //     }
    //     else{
    //         day = "weekend"
    //         // res.send("Booo! I have to work.")
    //         res.render('list', {kindOfDay : day})
    // }
})

app.listen(port, () => {
    console.log("server is runnning on port 3000.")
})