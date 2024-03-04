"use strict"

// const express = require("express")
// const app = express()

const app = require("express")()

require("dotenv").config()
const PORT = process.env.PORT || 8000

app.get("/*", (req, res) => {
  throw new Error("Error")
})

app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT))

