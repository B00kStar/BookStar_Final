const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Types.ObjectId, required: true },
    items: [
      {
        bookId: { type: mongoose.Types.ObjectId, required: true },
        title: String,
        quantity: Number,
        unitPrice: Number,
        totalPrice: Number
      }
    ],
    orderDate: { type: Date, default: Date.now },
    paymentStatus: { type: String, enum: ["pending", "completed", "failed"], default: "pending" },
    shippingAddress: {
      street: String,
      city: String,
      country: String,
      zipCode: String
    },
    paymentMethod: String
  },
  {
    timestamps: true,
    versionKey: false
  }
);

module.exports = mongoose.model("Order", orderSchema);
