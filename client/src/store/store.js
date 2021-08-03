import { configureStore } from "@reduxjs/toolkit";
import allSchoolsReducer from "./schools.store";
import schoolReviewsReducer from "./schoolReviews.store";
import userDetailsReducer from "./userDetails.store";

export const store = configureStore({
  reducer: {
    schools: allSchoolsReducer,
    schoolReviews: schoolReviewsReducer,
    user: userDetailsReducer,
  },
});
