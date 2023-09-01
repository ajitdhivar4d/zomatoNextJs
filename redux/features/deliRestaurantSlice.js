import { createSlice } from "@reduxjs/toolkit"

const initialRestaurants = []

const deliRestaurantSlice = createSlice({
  name: "deliRestaurant",
  initialState: initialRestaurants,
  reducers: {
    setDeliRestaurants: (state, action) => {
      return action.payload
    },
  },
})

export const { setDeliRestaurants } = deliRestaurantSlice.actions
export default deliRestaurantSlice.reducer
