// import mongoose, { Schema } from "mongoose"

// const menuItemSchema = new Schema({
//   name: String,
//   description: String,
//   price: Number,
//   votes: Number,
// })

// const menuCategorySchema = new Schema({
//   name: String,
//   description: String,
//   items: [menuItemSchema],
// })

// const collectionName = "custom_delivery_collection" // Specify your custom collection name here

// const deliveryRestaurantSchema = new Schema(
//   {
//     name: {
//       type: String,
//       required: true,
//     },
//     rating: Number,
//     numDiningReviews: Number,
//     diningRating: Number,
//     numDeliveryReviews: Number,
//     deliveryRating: Number,
//     categories: [String],
//     location: String,
//     openingHours: String,
//     menu: [menuCategorySchema],
//     // ... other fields related to the restaurant
//   },
//   { timestamps: true, collection: collectionName }, // Use the collection name here
// )

// const DeliveryRestaurant =
//   mongoose.models.DeliveryRestaurant ||
//   mongoose.model("DeliveryRestaurant", deliveryRestaurantSchema, collectionName)

// export default DeliveryRestaurant
