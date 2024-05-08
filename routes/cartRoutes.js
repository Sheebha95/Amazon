const express = require('express');
const router = express.Router();
const {getAllItems,addItem,updateItem,deleteItem}=require('../controllers/cartController');

router.get('/', getAllItems);
router.post('/', addItem);
router.put('/:id', updateItem);
router.delete('/:id', deleteItem);



module.exports = router;
