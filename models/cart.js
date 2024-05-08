const mongoose = require("mongoose");
//const Schema = mongoose.Schema;

const cartSchema = new mongoose.Schema({
    Item: String,
    quantity: Number,
    amount: Number,
    returnpolicy: String,
    deliveryCharges: Number,
    coupon: String
});

module.exports = mongoose.model("Cart Details", cartSchema);