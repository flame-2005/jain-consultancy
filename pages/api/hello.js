import { dbConnect } from '../../middlwware/mongoose'; // Import the dbConnect function

export default async function GET(req, res) {
  try {
    const con = await dbConnect(); // Assuming dbConnect is an async function to connect to the database
    // Send JSON response
    res.status(200).json({
      message: "Hello from the Edge!"
    });
  } catch (error) {
    // Handle errors
    console.error("Error connecting to the database:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
