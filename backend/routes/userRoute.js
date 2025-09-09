import express from 'express';
import { getCurrentUser, loginUser, registerUser, updatePassword, updateProfile } from '../controllers/userController.js';
import authMiddleware from '../middleware/auth.js';


const userRouter = express.Router();

//PUBLIC ROUTES
userRouter.post('/register', registerUser);
userRouter.post('/login',loginUser);


//PRIVATE LINKS protect also
userRouter.get('/me',authMiddleware, getCurrentUser);    //will give current user
userRouter.put('/profile',authMiddleware, updateProfile);   //will update the profile
userRouter.put('/password',authMiddleware, updatePassword);  //will update the password

export default userRouter;