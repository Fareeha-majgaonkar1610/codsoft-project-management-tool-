import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://fareehamm_db_user:3tFZTxckUCSoe7oK@cluster0.ykyrekz.mongodb.net/Workflow')
    .then (() => console.log('DB connected'));
    
}