const express = require('express');
const router = express.Router();
const _= require('lodash');
const request = require('request') 
var {User } = require('../models/user');
const {Order} = require('../models/order') ;

//object id..
const {ObjectID} = require('mongodb');
var obj = new ObjectID();
console.log(obj);


// Delete order...
router.delete('/data/:id' , (req,res) => { 
     var id = req.params.id; 
    if(!ObjectID.isValid(id)) 
   {
    console.log('Id not match..!!')
    return res.status(404).send();
   } 

   User.findByIdAndRemove(id).then( (data) => {

    if ( !data)
    {
      return res.status(404).send();
    }
          console.log('remove data...');
          res.send(data);
   }).catch ( (e) => {
    res.status(400).send();
   });  
   });  


   router.delete ('/data' , (req,res) => {
     var inStock =true;

    Order.find( { inStock })

    . deleteOne(function(err, result) {
    if (err) {
       console.log(err);
    }
    if (result) {
      console.log("Number of deleted records:" +  result);
      res.send(result);
    }
   })
  })

module.exports = router ;