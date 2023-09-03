import { connectMongoDB } from "@/lib/mongodb"
import TopBrandRestaurant from "@/models/topBrandRestaurant"

import { NextResponse } from "next/server"

/////GET///////
export const GET = async (req) => {
  try {
    await connectMongoDB()
    // Use the DeliveryRestaurant model to fetch data
    const restaurants = await TopBrandRestaurant.find()

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
