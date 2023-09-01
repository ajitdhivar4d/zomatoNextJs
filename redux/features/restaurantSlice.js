import { createSlice } from "@reduxjs/toolkit"

const initialRestaurants = []

const restaurantSlice = createSlice({
  name: "restaurant",
  initialState: initialRestaurants,
  reducers: {
    setRestaurants: (state, action) => {
      return action.payload
    },
  },
})

export const { setRestaurants } = restaurantSlice.actions
export default restaurantSlice.reducer
