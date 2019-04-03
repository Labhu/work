
/**
 * Router Configuration Files
 */

/**
 * System and 3rd party libs
 */
const express = require('express');
const router = express.Router();
/**
 * Router Definitions
 */
router.get('/', function (req, res, next) {

    res.send("Hello, This is root");
});

// router.get('/', (req, res, next) => { 
//     res.status(200).json({message: "Here we are handling the get request for the products"});
//   });

/**
 * Export Router
 */
module.exports = router;