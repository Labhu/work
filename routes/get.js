const express = require('express');
const router = express.Router();
const _= require('lodash');
const request = require('request') 
var  {User}  = require('../models/user');
var  {Order} = require('../models/order');
 

// Retrive data.......


router.get('/data/:id', (req, res) => { 
Order.
  findById({ _id: req.params.id 
  }).then(doc =>{
    console.log(doc);
    res.send(doc);
}).catch( err => {
    console.log('error in data fetch')
    res.status(404).send(err);
})
});

// Retrive using populate..

router.get('/get', (req, res) => { 
Order.
  findOne({ order_name: 'Casino Royale' }).
  populate('user_data').
  exec(function (err, order) {
    if (err)  { return handleError(err); } 
    console.log('The user order  data is %s', order.user_data);
    res.send(order);
    // prints "The author is Ian Fleming"
  });
})

module.exports = router;