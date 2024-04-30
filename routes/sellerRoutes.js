const express = require('express');
const router = express.Router();
const {getAllSellers,createSeller,updateSeller,deleteSeller}=require('../controllers/sellerController');

router.get('/', getAllSellers);
router.post('/', createSeller);
router.put('/:id', updateSeller);
router.delete('/:id', deleteSeller);



module.exports = router;
