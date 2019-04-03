const mongoose =require ('mongoose');
var mongoosePaginate = require('mongoose-paginate');
const _= require ('lodash');
const validator=require('validator');
const User = require('../models/user') ;

const Schema = mongoose.Schema;

var UserSchema = new mongoose.Schema ( {

   order_name : {
        type : String,
        required : true, 
        minlength : 3,
        trim : true
    },
 
    order_price : {
        type : Number
    } ,
    
      inStock : {
           type : mongoose.Schema.Types.Boolean
      
    },

     user_data: [{ type:mongoose.Schema.Types.ObjectId, ref: 'User'}]
    //    {  at:{type: Schema.Types.Date, default: Date.now()},
    //      abc : {type: Schema.Types.ObjectId, ref: 'User'} }
}); 


UserSchema.plugin(mongoosePaginate);
var Order =mongoose.model('Order', UserSchema);
   
module.exports ={
    Order
}; 