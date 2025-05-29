const express = require("express");
const route = express.Router();
const ProductController = require("../Controllers/ProductController")

route.get("/GetData",ProductController.GetData)
route.get("/displaypayment",ProductController.displaypayment)

module.exports = route