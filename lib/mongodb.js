import mongoose from "mongoose"

export const connectMongoDB = async () => {
  const mongodbUri = process.env.NEXT_PUBLIC_MONGODB_URI
  try {
    await mongoose.connect(mongodbUri)
    console.log("Connected to MongoDB")
  } catch (error) {
    console.log("Error connecting to MongoDB: ", error)
  }
}
