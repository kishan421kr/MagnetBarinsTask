const express = require("express");
const route = express.Router();
const ProductController = require("../Controllers/ProductController")

route.get("/GetData",ProductController.GetData)


module.exports = route