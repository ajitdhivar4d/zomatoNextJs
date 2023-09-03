import { createSlice } from "@reduxjs/toolkit"

const initialRestaurants = []

const topBrandRestaurantSlice = createSlice({
  name: "topBrandRestaurant",
  initialState: initialRestaurants,
  reducers: {
    setTopBrandRestaurants: (state, action) => {
      return action.payload
    },
  },
})

export const { setTopBrandRestaurants } = topBrandRestaurantSlice.actions
export default topBrandRestaurantSlice.reducer
