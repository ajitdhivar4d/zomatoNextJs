import { configureStore } from "@reduxjs/toolkit"
import categoryReducer from "./features/categorySlice"
import deliRestaurantReducer from "./features/deliRestaurantSlice"
import diningRestaurantReducer from "./features/diningRestaurantSlice"
import oderPageInfoReducer from "./features/orderPageInfoSlice"

const store = configureStore({
  reducer: {
    category: categoryReducer,
    deliRestaurant: deliRestaurantReducer,
    diningRestaurant: diningRestaurantReducer,
    oderPageInfo: oderPageInfoReducer,
  },
})

export default store
