const express = require('express');
const authRouter = express.Router()
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const UserModel = require('../../models/User');
const auth = require('../../middleware/auth');



// router get api/auth
// @desc login user
// @access Public
authRouter.post('/',(req,res)=>{
    const { email, password} = req.body;
    if(!email || !password){
        res.status(400).json({msg:'Please enter all fields'});
    }

    // Check if user exister
    UserModel.findOne({ email })
    .then(user=> {
       if(!user) return res.status(400).send({msg : 'User does not exist'});
       // validate the passowrd
       bcrypt.compare(password, user.password)
       .then(isMatch=>{
           if(!isMatch) return res.status(400).json({msg: 'Invalid credentials'});
           jwt.sign(
            {id: user.id},
            config.get('secret_key'),
            { expiresIn: 3600},
            (err, token)=>{
                if(err) throw err;
                res.json(
                    {
                        token,
                        user:
                        {
                            id:user.id,
                            name:user.name,
                            email: user.email
                         }
                     })
            })
       })
    })
});


// router get api/auth/user
// @desc get user
// @access Private
authRouter.get('/user',auth,(req,res)=>{
    UserModel.findById(req.user.id)
    .select('-password')
    .then(user => res.json(user));
})

module.exports = authRouter;