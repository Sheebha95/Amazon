
const Customer = require('../models/customer');


const getAllCustomers = async (req, res) => {
  try {
    const customers = await Customer.find();
    res.json(customers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createCustomer = async (req, res) => {
  const customer = new Customer({
    customerName: req.body.customerName,
    phoneno: req.body.phoneno,
    address: req.body.address,
    email: req.body.email,
    gender: req.body.gender,
    age: req.body.age,
  });
  try {
    const newCustomer = await customer.save();
    res.status(201).json(newCustomer);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
const updateCustomer = async (req, res) => {
  try {
    const updateCustomer = await Customer.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updateCustomer);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
const deleteCustomer = async (req, res) => {
  try {
    await customer.findByIdAndDelete(req.params.id);
    res.json({ message: 'Customer deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports={createCustomer,getAllCustomers,deleteCustomer,updateCustomer}
