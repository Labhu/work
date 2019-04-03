const mongoose =require ('mongoose');
const _= require ('lodash');
var mongoosePaginate = require('mongoose-paginate');
const {Order} = require('../models/order') ;

const validator=require('validator');
const Schema = mongoose.Schema;

var UserSchema = new mongoose.Schema({

  
    name :{ 
        type : String,
      required : true, 
      minlength : 3,
      trim : true

    },

    email :{
      type : String,
      required : true, 
      minlength : 3,
      trim : true,
      unique : true,
      validator: {
          validate : validator.isEmail,
          message : '{value} is not valid email'
      }
  },

    address : {
        type : String,
      required : true, 
      minlength : 7,
      trim : true

    },

    phone_no : { type : Number,
        required : true, 
        minlength : 10,
        trim : true  }

} )

UserSchema.plugin(mongoosePaginate);
var User =mongoose.model('User', UserSchema);
   
module.exports ={
    User
}; 