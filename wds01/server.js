const express = require('express')
const app = express()

app.set('view engine','ejs')

app.get('/',(req,res)=>{
    console.log("Hi there...")
    // res.send("Hello mcc")
    // res.sendStatus(500)
    // res.status(500).send("Error occurred")
    // res.json({message:"Hello mcc"})
    // res.download("server.js")
    // res.render('index')
    // res.render('index',{name:"Mcc",age:20})
     res.render("index",{text : "HELLO MY FRIENDS!"})
    // res.send("Hello mcc")
})
app.listen (7799,()=>console.log("Server run : http://127.0.0.1:7799"))

