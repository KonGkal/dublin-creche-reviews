import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getUser, addNewUser } from "../services/apiService";
import { UserDetailsInterface } from "../interfaces/types";

export const getOneUser = createAsyncThunk(
  "user,getOneUser",
  async (token: string) => {
    const data = await getUser(token);
    return data;
  }
);

export const subscribeUser = createAsyncThunk(
  "user,subscribeUser",
  async (token: string) => {
    const data = await addNewUser(token);
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
