import { combineReducers, configureStore } from "@reduxjs/toolkit";
import toolkitReducer from "./toolkitReducer";
import toolkitSlice from "./toolkitSlice";

const rootReducer = combineReducers({
    toolkit:toolkitReducer,
    toolkitS:toolkitSlice
});
export const store = configureStore({
  reducer: rootReducer,
});
