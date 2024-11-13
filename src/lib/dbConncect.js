import mongoose from "mongoose"; // Import mongoose for MongoDB connection

let isConnected = false; // Global flag to track the connection status

/**
 * Establishes a connection to the MongoDB database using the connection string
 * from environment variables. Ensures that the connection is made only once.
 */
export async function connectDB() {
  // Check if the database is already connected
  if (isConnected) {
    console.log("DB is already connected");
    return;
  }

  // Throw an error if the connection string is missing from environment variables
  if (!process.env.MONGODB_URI) {
    throw new Error("Missing MONGODB_URI environment variable");
  }

  try {
    // Establish a new connection using the provided MongoDB URI
    const connection = await mongoose.connect(process.env.MONGODB_URI);

    // Set isConnected to true if the connection's ready state is successful
    isConnected = connection?.connection?.readyState === 1;

    // Log a confirmation message if the DB is connected
    if (isConnected) {
      console.log("DB connected successfully");
    }
  } catch (error) {
    // Error handling: Log the error message and throw an appropriate error
    console.log("🚀 ~ connectDB ~ error:", error.message);
    console.error("DB connection failed:", error);
    throw new Error("Database connection error");
  }
}
