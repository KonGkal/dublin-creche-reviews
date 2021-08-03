import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getSchoolReviews } from "../services/apiService";

export const getOneSchoolReviews = createAsyncThunk(
  "schoolReviews,getOneSchoolReviews",
  async (SchoolId) => {
    const data = await getSchoolReviews(SchoolId);
    return data;
  }
);

const initialState = {
  schoolReviews: [],
};

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
