import { createSlice } from "@reduxjs/toolkit";

const toolkitSlice = createSlice({
  name: "toolkitSlice",
  initialState: {
    selectedCategory: "",
  },

  reducers: {
    selectedCategory(state, action) {
      state.selectedCategory = action.payload;
    },
  },
});
export default toolkitSlice.reducer;

export const { selectedCategory } = toolkitSlice.actions;
