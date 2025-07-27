const express = require('express');
const route = express.Router();

route.get('/register', (req,res)=>{
    res.status(200).json({message: 'hello'});
})

route.post('/register', 
    body('fullName').trim().isLength({ min: 5 }),
    body('email').trim().isEmail().isLength({ min: 13 }),
    body('password').trim().isLength({ min: 4 }),
    async(req,res)=>{
})

module.exports = route;


