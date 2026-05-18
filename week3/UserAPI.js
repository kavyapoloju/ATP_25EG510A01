//importing the frontend and the db and other datas
import express from 'express';
import { isValidObjectId } from 'mongoose';
import { UserModel } from '../models/UserModel.js';
import { hash,compare } from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { verifyToken } from '../auth/middlewares/verifyTokens.js';
const {sign}=jwt
//message sender to the server
export const userApp = express.Router();

//if the following is the has all the key terms
function ensureValidUserId(id) {
  if (!isValidObjectId(id)) {
    const err = new Error('invalid user id');
    err.status = 400;
    throw err;
  }
}
//post function
userApp.post('/users', async (req, res, next) => {
    //retriving the values
    const newUser = req.body;
    //hashing the password
    const hashedpassword=await hash(newUser.password,10)
    //assinging the password
    newUser.password=hashedpassword;
    //sending it to the document
    const newUserDocument = new UserModel(newUser);
    //saving the document
    const result = await newUserDocument.save();
    //if the following is created
    res.status(201).json({ message: 'user created', payload: result });
      
    
});
//retriving the data
userApp.get('/users',verifyToken, async (req, res) => {
    const usersList = await UserModel.find();
    //if empty
    if(!usersList){
      return res.status(404).json({})
    }
    //else prints the values
    res.status(200).json({ message: 'users', payload: usersList })
});
 //retriving the data by the user id
userApp.get('/users/:id', async (req, res, next) => {
    const uid = req.params.id;
    //checks if the user is valid or not
    ensureValidUserId(uid);
    //checks if the rules are correct
    const userObj = await UserModel.findById(uid);
    if (!userObj) {
      return res.status(404).json({ message: 'user not found' });
    }

    res.status(200).json({ message: 'user', payload: userObj });
  
});

userApp.put('/users/:id', async (req, res) => {
  
    const uid = req.params.id;
    ensureValidUserId(uid);

    const modifiedUser = req.body;
    const updatedUser = await UserModel.findByIdAndUpdate(
      uid,
      { $set: { ...modifiedUser } },
      { new: true, runValidators: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: 'user not found' });
    }

    res.status(200).json({ message: 'user updated', payload: updatedUser });
});

userApp.delete('/users/:id', async (req, res, next) => {
    const uid = req.params.id;
    ensureValidUserId(uid);

    const deletedUser = await UserModel.findByIdAndDelete(uid);
    if (!deletedUser) {
      return res.status(404).json({ message: 'user not found' });
    }

    res.status(200).json({ message: 'user deleted', payload: deletedUser });
  
});

userApp.post('/auth', async (req, res) => {
    const { email, password } = req.body;
    //verify email
    let user=await UserModel.findOne({email:email})
    //if email is not found
    if(!user){
        return res.status(404).json({message:"Invalid email"})
    }
    let isMatch= await compare(password,user.password)
    if(!isMatch){
        return res.status(401).json({message:"Invalid password"})
    }
    //if email and password are correct
     //create token 
    const signedToken = sign({email:user.email},
      "abcdef",{expiresIn:100}
     )

       res.cookie("token",signedToken,{
      httpOnly:true,
      sameSite:"lax",
      secure:false
    })
    //send res
   res.status(200).json({message:"login succesfull",payload:user})


  
})