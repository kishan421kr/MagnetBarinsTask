
const mongoose = require("mongoose");
const orderSchema = new mongoose.Schema({
  products: [
    {
      name: String,
      price: Number,
      qnty: Number,
      defaultImage: String,
    },
  ],
  amount: Number,
  status: {
    type: String,
    default: "Success"
  },
  stripeSessionId: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Order', orderSchema);
