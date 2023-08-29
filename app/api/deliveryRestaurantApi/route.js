import { connectMongoDB } from "@/lib/mongodb"
import DeliveryRestaurant from "@/models/deliveryRestaurant"
import { NextResponse } from "next/server"

/////GET///////
export const GET = async (req) => {
  try {
    await connectMongoDB()
    // Use the DeliveryRestaurant model to fetch data
    const restaurants = await DeliveryRestaurant.find()

    // console.log("Fetched Restaurants:", restaurants)

    return NextResponse.json(
      { message: "Fetched restaurant data.", restaurants }, // Include the fetched data
      { status: 200 },
    )
  } catch (error) {
    return NextResponse.json(
      { message: "An error occurred while fetching restaurants." },
      { status: 500 },
    )
  }
}

//////POST////////
