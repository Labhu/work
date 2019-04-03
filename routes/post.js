const express = require('express');
let mongoose = require('mongoose');
const router = express.Router();
const _= require('lodash');
const request = require('request') 
var {User } = require('../models/user');
const {Order} = require('../models/order') ;



// add data in user collection....
router.post('/post', (req, res) => {

    var body = _.pick (req.body , ['name' ,'email','address' , 'phone_no']);

    console.log(body);

     var user = new User(req.body);

        user.save().then ((doc) => {
        res.send('Successfully inserted!');
            res.send(doc);
        }, (err) => {
        res.status(400).send(err);
    });
});



router.post('/data', (req, res) => {
            
    var order = new Order( {
        order_name: req.body.order_name,
        order_price : req.body.order_price,
        inStock : req.body.inStock
        });
    
       order.save().then ((doc) => {
           console.log(doc);
        res.send('Successfully inserted!');
            res.send(doc);
        }, (err) => {
        res.status(400).send(err);
    });
    }); 



               
router.post('/doc', (req, res) => { 

    var body = _.pick (req.body , ['name' ,'email','address' , 'phone_no']);

        console.log(body);

        const user= new User(req.body);
        console.log('aaaaa');
      
      user.save(function (err) {
        if (err)  { return  console.log(err); }
          res.send(body);


            const order1 = new Order({
                order_name : 'top-1',
                order_price : 444,
                user_data: user._id // assign the _id from the user
              });
            
              order1.save(function (err , data) {
                if (err) { return console.log(err); }
                   console.log(data);
                // thats it!
              });
            });
            

        Order.
  findOne({ order_name: 'top-1' }).
  populate('user_data').
  exec(function (err, order) {
    if (err)  { return console.log(err); }
    console.log('The user is %s', order);
        //console.log(order);
  
      }) ;
    });

module.exports =  router ;    
