import { connectMongoDB } from "@/lib/mongodb"
import Restaurant from "@/models/restaurant"
import { NextResponse } from "next/server"

/////GET///////
export const GET = async (req) => {
  try {
    await connectMongoDB()
    // Use the Restaurant model to fetch data
    const restaurants = await Restaurant.find()

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

export const POST = async (req) => {
  try {
    await connectMongoDB() // Connect to MongoDB

    const requestBody = await req.text()
    const {
      id,
      ranking,
      name,
      phone,
      email,
      website,
      address,
      rating,
      total_reviews,
      price,
      category,
      lat,
      long,
      map_url,
      image_url,
      listing_url,
      created_at,
    } = JSON.parse(requestBody)

    if (!id || !name || !rating || !total_reviews || !price || !image_url) {
      return NextResponse.json(
        { message: "Required fields are missing." },
        { status: 400 },
      )
    }

    const newRestaurant = new Restaurant({
      id,
      ranking,
      name,
      phone,
      email,
      website,
      address,
      rating,
      total_reviews,
      price,
      category,
      lat,
      long,
      map_url,
      image_url,
      listing_url,
      created_at,
    })

    await newRestaurant.save() // Save the new restaurant document

    return NextResponse.json(
      { message: "Restaurant data added successfully." },
      { status: 200 },
    )
  } catch (error) {
    console.error("Error adding restaurant data:", error)
    return NextResponse.json(
      { message: "An error occurred while adding restaurant data." },
      { status: 500 },
    )
  }
}
