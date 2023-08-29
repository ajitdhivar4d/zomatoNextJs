import mongoose, { Schema } from "mongoose"

const diningRestaurantSchema = new Schema(
  {
    id: {
      type: Number,
      required: true,
    },
    ranking: String,
    name: {
      type: String,
      required: true,
    },
    phone: String,
    email: String,
    website: String,
    address: String,
    rating: {
      type: Number,
      required: true,
    },
    total_reviews: {
      type: Number,
      required: true,
    },
    price: String,
    category: String,
    lat: Number,
    long: Number,
    map_url: String,
    image_url: String,
    listing_url: String,
    created_at: String,
  },
  { timestamps: true, collection: "diningRestaurants" },
)

const DiningRestaurant =
  mongoose.models.DiningRestaurant ||
  mongoose.model(
    "DiningRestaurant",
    diningRestaurantSchema,
    "diningRestaurants",
  )

export default DiningRestaurant
