import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
  todos: ["1", "2", "3"],
};

export const increment = createAction("INCREMENT");
export const decrement = createAction("DECREMENT");

export default createReducer(initialState, {
  [increment]: function (state) {
    state.counter = state.counter + 1;
  },
  [decrement]: function (state) {
    state.counter = state.counter - 1;
  },
});
