import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getSchoolReviews } from "../services/apiService";
import { ReviewInterface } from "../interfaces/types";

export const getOneSchoolReviews = createAsyncThunk(
  "schoolReviews,getOneSchoolReviews",
  async (SchoolId: string) => {
    const data = await getSchoolReviews(SchoolId);
    return data;
  }
);
interface SchoolReviewsState {
  schoolReviews: ReviewInterface[];
  loading: "idle" | "pending" | "succeeded" | "failed";
}

const initialState = {
  schoolReviews: [],
  loading: "idle",
} as SchoolReviewsState;

export const schoolReviewsSlice = createSlice({
  name: "schoolReviews",
  initialState,
  reducers: {},
  extraReducers: (builders) => {
    builders.addCase(getOneSchoolReviews.fulfilled, (state, action) => {
      state.schoolReviews = action.payload;
      state.loading = "succeeded";
    });
  },
});

export default schoolReviewsSlice.reducer;
