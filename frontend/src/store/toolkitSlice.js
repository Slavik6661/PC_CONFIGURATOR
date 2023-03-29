import { createSlice } from "@reduxjs/toolkit";

const toolkitSlice = createSlice({
  name: "toolkitSlice",
  initialState: {
    selectedDetails: "",
    selectedCategory: "",
    listSelectedDetails: {},
  },

  reducers: {
    selectedDetails(state, action) {
      state.selectedDetails = action.payload;
    },

    selectedCategory(state, action) {
      state.selectedCategory = action.payload;
    },

    listSelectedDetails(state, action) {
      state.listSelectedDetails = action.payload;
    },
  },
});
export default toolkitSlice.reducer;

export const { listSelectedDetails, selectedCategory } = toolkitSlice.actions;
