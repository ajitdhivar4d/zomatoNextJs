import { createSlice } from "@reduxjs/toolkit"

const initialRestaurants = []

const diningRestaurantSlice = createSlice({
  name: "diningRestaurant",
  initialState: initialRestaurants,
  reducers: {
    setDiningRestaurants: (state, action) => {
      return action.payload
    },
  },
})

export const { setDiningRestaurants } = diningRestaurantSlice.actions
export default diningRestaurantSlice.reducer
