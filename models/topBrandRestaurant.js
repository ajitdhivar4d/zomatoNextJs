import mongoose, { Schema } from "mongoose"

const menuItemSchema = new Schema({
  name: String,
  description: String,
  price: Number,
  votes: Number,
  imageUrl: String,
})

const menuCategorySchema = new Schema({
  name: String,
  description: String,
  items: [menuItemSchema],
})

const topBrandRestaurantSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    rating: Number,
    basePrice: Number,
    restroImgUrl: String,
    numDiningReviews: Number,
    diningRating: Number,
    numDeliveryReviews: Number,
    deliveryRating: Number,
    categories: [String],
    location: String,
    openingHours: String,
    menu: [menuCategorySchema],
  },
  { timestamps: true, collection: "topBrandRestaurants" },
)

const TopBrandRestaurant =
  mongoose.models.TopBrandRestaurant ||
  mongoose.model(
    "TopBrandRestaurant",
    topBrandRestaurantSchema,
    "topBrandRestaurants",
  )

export default TopBrandRestaurant
