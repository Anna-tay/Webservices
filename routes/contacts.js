const express = require('express');
const router = express.Router();

const contactCon = require('../controller/contacts');

// GET /feed/posts
router.get('/', contactCon.getAll);

router.get('/:id', contactCon.getOne);
// localhost:8080/professional/

module.exports = router;