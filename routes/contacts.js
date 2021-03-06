// Initilize Express
const express = require('express');

// Create variable router
const router = express.Router();

// @route GET api/contacts
// @desc Get all users contacts
// @access Private
router.get('/', (req,res) => {
    res.send('Get users contacts')
});

// @route POST api/contacts
// @desc Add new contact
// @access Private
router.post('/', (req,res) => {
    res.send('Add users contact')
});

// @route PUT api/contacts/:id
// @desc Update contact
// @access Private
router.put('/:id', (req,res) => {
    res.send('Update contact')
});

// @route DELETE api/contacts/:id
// @desc Remove a contact
// @access Private
router.delete('/:id', (req,res) => {
    res.send('Delete a contact')
});


// Must export router 
module.exports = router;