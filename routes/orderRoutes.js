const express = require('express');
const router = express.Router();
const {getAllOrders,createOrder,updateOrder,deleteOrder}=require('../controllers/orderController');

router.get('/', getAllOrders);
router.post('/', createOrder);
router.put('/:id', updateOrder);
router.delete('/:id', deleteOrder);



module.exports = router;
