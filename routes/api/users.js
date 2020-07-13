const UserModel = require('../../models/User');
const express = require('express');
const userRouter = express.Router()
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');


// router get api/users
// @desc register user
// @access Public
userRouter.post('/',(req,res)=>{
    const { name, email, password} = req.body;
    if(!name || !email || !password){
        res.status(400).json({msg:'Please enter all fields'});
    }

    // Check if user exister
    UserModel.findOne({ email })
    .then(user=> {
       if(user) return res.status(400).send({msg : 'User already exist'}) 
       
       const newuser = new UserModel({
           name,
           email,
           password
       })
       // create hash password
       bcrypt.genSalt(10,(err, salt)=>{
           bcrypt.hash(newuser.password, salt, (err, hash)=>{
               if(err) throw err;
               newuser.password = hash;
               newuser.save()
               .then(user =>
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
             )
               .catch(err => console.log(err));
           })
       })
    })
})


module.exports = userRouter;