import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getSchools, addSchool } from "../services/apiService";

export const getAllSchools = createAsyncThunk(
  "schools,getAllSchools",
  async () => {
    const { data } = await getSchools();
    return data;
  }
);

// export const addNewSchool = createAsyncThunk(
//   "schools, addNewSchool",
//   async(payload) => {

//   }
// )

const initialState = {
  schools: [],
};

export const schoolsSlice = createSlice({
  name: "schools",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllSchools.fulfilled, (state, action) => {
      state.schools = action.payload;
      state.loading = "succeeded";
    });
  },
});

export default schoolsSlice.reducer;
