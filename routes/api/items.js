const express = require('express');
const router = express.Router();
// item model 
const ItemModel = require('../../models/Items');

// router get api/item
// @desc get Item
// @access Public


router.get('/',(req,res)=>{
    ItemModel.find()
    .sort({date: -1})
    .then(items => res.json(items));
});


module.exports = router;