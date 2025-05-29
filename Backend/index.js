const express = require('express');
const app = express();
const mongoose = require("mongoose");
require('dotenv').config();
const cors = require("cors");
const ProductRoute = require("./Routes/ProductRoute");

const Stripe = require("stripe");
const path = require('path');
const Order = require("./Models/OrderModel");

app.use(cors());
app.use(express.json());
app.use("/Product",ProductRoute)
mongoose.connect("mongodb://localhost:27017/MyShop").then(()=>{
    console.log("DB Connected");
})
const stripe = Stripe("sk_test_51RQRIaE8GU7lihPqzb3NeikxIT4mnQ6K2tSJwr8kKdWX9z6sTJwegfazpmLwOcd3RhCzkjT5jHnojudm8MP5sDWr00jNwAmynu");
app.post("/checkout",async(req,res)=>{
    console.log(req.body);
    const { Product } = req.body;
    if (!Product || !Array.isArray(Product)) {
      return res.status(400).json({ error: "Invalid Product data" });
    }
    try {
    const line_items = Product.map((item) => ({
      price_data: {
        currency: "usd",
        product_data: {
          name: item.name,
          images: [item.image],
          metadata: {
            product_id: item.id,
          },
        },
        unit_amount: Math.round(item.price * 100), 
      },
      quantity: item.qty,
    }));

    

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items,
      mode: "payment",
      success_url: "http://localhost:9000/success",
      cancel_url: "http://localhost:9000/cancel",
    });

    const totalAmount = Product.reduce((acc, item) => acc + item.price * item.qty, 0);

    const newOrder = new Order({
      products: Product,
      amount: totalAmount,
      stripeSessionId: session.id,
    });

    await newOrder.save();

    res.json({ id: session.id }); 
  } catch (error) {
    console.error("Stripe Checkout Error:", error);
    res.status(500).json({ error: "Stripe session creation failed" });
  }

})

const port = process.env.PORT || 9000;
app.listen(port,()=>{
    console.log(`Server Running on ${port}`)
})