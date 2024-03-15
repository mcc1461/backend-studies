const express = require('express')
const app = express()


app.get('/',(req,res)=>{
    console.log("GET /")
    res.download('server.js')
    // res.send("Hello mcc")
})
app.listen (7799,()=>console.log("Server run : http://127.0.0.1:7799"))

