import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
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

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk = ThunkAction<void, RootState, unknown, Action>;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const schoolsSelector = (state: RootState) => state.schools;
export const schoolReviewsSelector = (state: RootState) => state.schoolReviews;
export const userSelector = (state: RootState) => state.user;
