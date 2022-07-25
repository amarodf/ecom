const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true, unique: true },
    product: [ 
       {
        productId: { type: String },
        quantity: { type: String, default: 1,}
        }
    ],
    total: { type: Number, required: true },
    status: { type: String, default: "pending" },
    address: { type: Object, required: true },


  },
  { timestamps: true }
);

const orderModel = mongoose.model("Order", OrderSchema);

module.exports = orderModel;