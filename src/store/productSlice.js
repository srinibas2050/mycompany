import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  size: "L",
  color: "Conchiglia",
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    updateSize(state, action) {
      state.size = action.payload;
    },
    updateColor(state, action) {
      state.color = action.payload;
    },
  },
});

export const { updateSize, updateColor } = productSlice.actions;

export default productSlice.reducer;
