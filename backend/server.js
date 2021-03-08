const express  = require("express");
const connectDB = require("./config/db");

const app = express();
connectDB()

const Port = 3000

app.use(express.json())




app.listen(Port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${Port}`)
  })