const mongoose = require("mongoose");
//const Schema = mongoose.Schema;

const sellerSchema = new mongoose.Schema({
    sellerName: String,
    phoneNo: Number,
    gstNumber: String,
    businessType: String,
    businessName: String,
    city: String,
    email: String
});

module.exports = mongoose.model("SellerDetalis", sellerSchema);