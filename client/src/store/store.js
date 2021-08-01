import { configureStore } from "@reduxjs/toolkit";
import allSchoolsReducer from "./schools.store";

export const store = configureStore({
  reducer: {
    schools: allSchoolsReducer,
  },
});
