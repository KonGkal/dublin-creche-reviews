import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getUser, addNewUser } from "../services/apiService";

export const getOneUser = createAsyncThunk("user,getOneUser", async (token) => {
  const data = await getUser(token);
  return data;
});

export const subscribeUser = createAsyncThunk(
  "user,subscribeUser",
  async (payload) => {
    const data = await addNewUser(payload);
    if (!data) return {};
    return data[0];
  }
);

const initialState = {
  user: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
      state.loading = "succeeded";
    },
  },
  extraReducers: (builders) => {
    builders.addCase(getOneUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.loading = "succeeded";
    });
    builders.addCase(subscribeUser.fulfilled, (state, action) => {
      state.user = [...state.user, action.payload];
      state.loading = "succeeded";
    });
  },
});
export const { setUser } = userSlice.actions;

export default userSlice.reducer;
