import { createSlice } from "@reduxjs/toolkit"

const initialCategory = ""

const categorySlice = createSlice({
  name: "category",
  initialState: initialCategory,
  reducers: {
    setCategory: (state, action) => {
      return action.payload
    },
  },
})

export const { setCategory } = categorySlice.actions
export default categorySlice.reducer
