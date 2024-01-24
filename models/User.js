// User.js - Inside your models directory
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  number:String,
  marks:String,
  preparing_for:String,
  preffered_collage:String,
  message:String
  
});

const User = mongoose.models.Users || mongoose.model("Users",userSchema)

export default User; // Export the User model as default
