import { configureStore } from "@reduxjs/toolkit"
import categoryReducer from "./features/categorySlice"
import restaurantReducer from "./features/restaurantSlice"

const store = configureStore({
  reducer: {
    category: categoryReducer,
    restaurant: restaurantReducer,
  },
})

export default store
