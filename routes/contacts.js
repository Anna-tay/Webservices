const express = require('express');
const router = express.Router();

const contactCon = require('../controller/contacts');

// GET /feed/posts
router.get('/', contactCon.getAll);

router.get('/:id', contactCon.getOne);

//create statement
router.post('/', contactCon.newContact);

// put route
router.put('/:id', contactCon.modifyId);

//Delete
router.delete('/:id', contactCon.deleteId);

module.exports = router;