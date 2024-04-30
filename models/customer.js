const mongoose = require("mongoose");
//const Schema = mongoose.Schema;

const customerSchema = new mongoose.Schema({
    customerName: String,
    phoneno: Number,
    address: String,
    email: String,
    gender: String,
    age: Number
});

module.exports = mongoose.model("CustomerDetails", customerSchema);