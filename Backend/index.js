const express = require('express');
const app = express();
const mongoose = require("mongoose");
require('dotenv').config();
const cors = require("cors");
const ProductRoute = require("./Routes/ProductRoute");
app.use(cors());
app.use(express.json());
app.use("/Product",ProductRoute)
mongoose.connect("mongodb://localhost:27017/MyShop").then(()=>{
    console.log("DB Connected");
})


const port = process.env.PORT || 9000;
app.listen(port,()=>{
    console.log(`Server Running on ${port}`)
})