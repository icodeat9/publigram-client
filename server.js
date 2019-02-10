const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const axios = require("axios");
const moment = require("moment")

const path = require("path");
app.use(express.static(path.resolve(__dirname, "build")))

app.get("/", (req, res) => {
    res.send(path.resolve(__dirname, "build", "index.html"))
})

app.listen(port, () => console.log("Listen on port: " + port))