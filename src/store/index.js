import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../reducers/scheduleReducer";

export const store = configureStore({
  reducer: rootReducer,
});
