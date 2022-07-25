const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true, unique: true },
    product: [ 
       {productId: { type: String }},
       {quantity: { type: String, default: 1 }}
    ],

  },
  { timestamps: true }
);

const cartModel = mongoose.model("Cart", CartSchema);

module.exports = cartModel;