const express = require('express')
const router = express.Router()

const ticket = require('../Models/ticket')

router.get('/gettickets', async (req, res) => {
    

    try{
        const tickets = await ticket.find({})
        res.send(tickets);
    } catch(error){
        return res.status(400).json({ message: 'ticket not found' });
    }
});

module.exports = router;