// Initilize Express
const express = require('express');

// Create variable router
const router = express.Router();

// @route POST api/users
// @desc Register a user
// @access Public
router.post('/', (req,res) => {
    res.send('Register a user')
});

// Must export router 
module.exports = router;
