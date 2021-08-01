import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getSchools } from "../services/apiService";

export const getAllSchools = createAsyncThunk(
  "allSchools,getAllSchools",
  async () => {
    const { data } = await getSchools();
    return data;
  }
);

const initialState = {
  allSchools: [],
};

export const schoolsSlice = createSlice({
  name: "allSchools",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllSchools.fulfilled, (state, action) => {
      state.allSchools = action.payload;
      state.loading = "succeeded";
    });
  },
});

export default schoolsSlice.reducer;
