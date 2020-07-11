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

router.post('/',(req,res)=>{
    const newItem = new ItemModel({
        name: req.body.name
    });
    newItem.save()
    .then(item => res.json(item))
    .catch(err => console.log(err));
})


module.exports = router;