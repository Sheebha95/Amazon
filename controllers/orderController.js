const Order = require('../models/order');


const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createOrder = async (req, res) => {
  const order = new Order ({
    orderId: req.body.orderId,
    orderDate: req.body.orderDate,
    product: req.body.product,
    amount: req.body.amount,
    quantity: req.body.quantity,
    phoneNo: req.body.phoneNo,
    customerName: req.body.customerName,
    address: req.body.address,
    paymentMode: req.body.paymentMode,
    deliveryDays: req.body.deliveryDays,
    orderStatus: req.body.orderStatus,
    returnPolicy: req.body.returnPolicy
  });
  try {
    const newOrder = await order.save();
    res.status(201).json(newOrder);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
const updateOrder = async (req, res) => {
  try {
    const updateOrder = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updateOrder);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
const deleteOrder = async (req, res) => {
  try {
    await Order.findByIdAndDelete(req.params.id);
    res.json({ message: 'Order deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports={createOrder,getAllOrders,deleteOrder,updateOrder}
