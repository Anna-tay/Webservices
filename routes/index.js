// -- The routes that I am using
const express = require('express');
const router = express.Router();

//routes
router.use('/contacts', require('./contacts'));


// exporting them
module.exports = router;