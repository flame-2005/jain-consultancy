import { connection } from "@/middlwware/mongoose"
import mongoose from "mongoose"
import User from "@/models/User"

export default async function POST(req, res) {
    try {
      await mongoose.connect(connection);
  
      const payload = req.body;
      console.log(payload) // No need to await req.body
      const user = new User(payload); // Create a new instance of the User model
  
      const result = await user.save();
      
      // Respond with success message or appropriate response
      res.status(200).json({ message: 'User created successfully', result });
    } catch (error) {
      // Handle errors
      console.error(error);
      res.status(500).json({ error: 'Server Error' });
    }
  }
