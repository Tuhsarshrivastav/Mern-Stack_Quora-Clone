const express = require('express')
const app = express()
const cors = require('cors')
const path = require('path')
const PORT = 5000;
require('dotenv').config()
const Database = require('./config/db')
const router = require('./routes/router')
// database connection
Database.connect()

//middlewares
app.use(express.json({ limit: "50mb" }))
app.use(express.urlencoded({ extended: true, limit: "50mb" }))
app.use(cors())
//cors
app.use((req, res, next) => {
    req.header("Access-Control-Allow-Origin", "*");
    req.header("Access-Control-Allow-Headers", "*");
    next();
});

// routes 
app.use("/api",router)


app.use("/uploads", express.static(path.join(__dirname, "./uploads")));
app.use(express.static(path.join(__dirname, "./client/build")));

app.get("*", (req, res) => {
    try {
      res.sendFile(path.join(`${__dirname}./client/build/index.html`));
    } catch (e) {
      res.send("Oops! unexpected error");
    }
  });


  //server listening
app.listen(process.env.PORT || PORT, () => {
    console.log(`Listening on port no ${PORT}`);
  });