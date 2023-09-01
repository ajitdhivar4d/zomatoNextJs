import { createSlice } from "@reduxjs/toolkit"

const initialOrderPageInfo = []

const orderPageInfoSlice = createSlice({
  name: "oderPageInfo",
  initialState: initialOrderPageInfo,
  reducers: {
    setOrderPageInfo: (state, action) => {
      return action.payload
    },
  },
})

export const { setOrderPageInfo } = orderPageInfoSlice.actions
export default orderPageInfoSlice.reducer
