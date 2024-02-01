// -- The routes that I am using
const express = require('express');
const router = express.Router();

//routes
router.use('/contacts', require('./contacts'));
router.use('/', require('./swagger'));

module.exports = router;