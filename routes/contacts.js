const express = require('express');

const contactCon = require('../controller/contact');

const router = express.Router();

// GET /feed/posts
router.get('/', contactCon.getData);
// localhost:8080/professional/
module.exports = router;