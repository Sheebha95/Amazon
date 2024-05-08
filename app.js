const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const config = require("./config");
const authRoutes = require("./routes/authRoutes");
const productRoutes = require("./routes/productRoutes");
const sellerRoutes = require("./routes/sellerRoutes");
const customerRoutes = require("./routes/customerRoutes");
const orderRoutes = require("./routes/orderRoutes");
const cartRoutes = require("./routes/cartRoutes");

const app = express();
app.use(cors());
app.use(bodyParser.json());
//app.use(express.json());

mongoose.connect(config.mongodbUri,
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("Error", console.error.bind(console, "mongoDB connection Error"));

app.get("/", async (req, res) => {
    res.send("The Server is running");
  });
  console.log("server");

  app.use('/api/auth', authRoutes);
  app.use("/api/products", productRoutes);
  app.use("/api/sellers", sellerRoutes);
  app.use("/api/customers", customerRoutes);
  app.use("/api/orders", orderRoutes);
  app.use("/api/items", cartRoutes);

  app.listen(config.port, () => {
    console.log(`Server is running on port ${config.port}`);
  });