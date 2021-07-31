import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getSchools } from "../services/apiService";

export const getAllSchools = createAsyncThunk(
  "schools,getAllSchools",
  async () => {
    const { data } = await getSchools();
    return data;
  }
);

const initialState = {
  schools: [],
};

export const schoolsSlice = createSlice({
  name: "schools",
  initialState,
});
