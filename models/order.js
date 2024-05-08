const mongoose = require("mongoose");
//const Schema = mongoose.Schema;

const orderSchema = new mongoose.Schema({
    orderId: String,
    orderDate: String,
    product: String,
    amount: Number,
    quantity: Number,
    phoneNo: Number,
    customerName: String,
    address: String,
    paymentMode: String,
    deliveryDays: String,
    orderStatus: String,
    returnPolicy: String
});

module.exports = mongoose.model("OrderDetails", orderSchema);