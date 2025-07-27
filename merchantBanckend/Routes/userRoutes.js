const express = require('express');
const route = express.Router();
const { body, validationResult } = require('express-validator');

route.get('/register', (req,res)=>{
    res.status(200).json({message: 'hello'});
})

route.post('/register', 
    body('fullName').trim().isLength({ min: 5 }),
    body('email').trim().isEmail().isLength({ min: 13 }),
    body('password').trim().isLength({ min: 4 }),
    async(req,res)=>{
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }
        res.status(200).json({message: 'User registered successfully!'});
})

module.exports = route;
