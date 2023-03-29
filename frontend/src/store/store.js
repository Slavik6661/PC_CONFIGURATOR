import { combineReducers, configureStore } from "@reduxjs/toolkit";

import toolkitSlice from "./toolkitSlice";

const rootReducer = combineReducers({
  toolkitS: toolkitSlice,
});
export const store = configureStore({
  reducer: rootReducer,
});
