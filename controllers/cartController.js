const Item = require('../models/cart');


const getAllItems = async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const addItem = async (req, res) => {
  const item = new Item({
    Item: req.body.Item,
    quantity: req.body.quantity,
    returnpolicy: req.body.returnpolicy,
    deliveryCharges: req.body.deliveryCharges,
    coupon: req.body.coupon,
  });
  try {
    const newItem = await item.save();
    res.status(201).json(newItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
const updateItem = async (req, res) => {
  try {
    const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updateItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
const deleteItem = async (req, res) => {
  try {
    await Item.findByIdAndDelete(req.params.id);
    res.json({ message: 'Item deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports={addItem,getAllItems,deleteItem,updateItem}
