import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getUsers, addNewUser } from "../services/apiService";
import { UserDetailsInterface } from "../interfaces/types";

export const getAllUsers = createAsyncThunk(
  "user,getOneUser",
  async (token: string) => {
    const data = await getUsers(token);
    return data;
  }
);

export const subscribeUser = createAsyncThunk(
  "user,subscribeUser",
  async (user: string) => {
    const data = await addNewUser(user);
    if (!data) return {};
    return data[0];
  }
);

interface UserDetailsState {
  user: UserDetailsInterface[];
  loading: "idle" | "pending" | "succeeded" | "failed";
}

const initialState = {
  user: [],
  loading: "idle",
} as UserDetailsState;

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
      state.loading = "succeeded";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllUsers.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(getAllUsers.fulfilled, (state, action) => {
      state.user = action.payload;
      state.loading = "succeeded";
    });
    builder.addCase(getAllUsers.rejected, (state) => {
      state.loading = "failed";
    });
    builder.addCase(subscribeUser.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(subscribeUser.fulfilled, (state, action) => {
      state.user = [...state.user, action.payload];
      state.loading = "succeeded";
    });
    builder.addCase(subscribeUser.rejected, (state) => {
      state.loading = "failed";
    });
  },
});
export const { setUser } = userSlice.actions;

export default userSlice.reducer;
