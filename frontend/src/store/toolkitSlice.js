import { createSlice } from "@reduxjs/toolkit";

const toolkitSlice = createSlice({
  name: "toolkitSlice",
  initialState: {
    count: 0,
    todos: ["1", "2", "3"],
  },

  reducers: {
    increment(state) {
      state.count = state.count + 1;
    },
    decrement(state) {
      state.count = state.count - 1;
    },
  },
});
export default toolkitSlice.reducer;

export const { increment, decrement } = toolkitSlice.actions;
