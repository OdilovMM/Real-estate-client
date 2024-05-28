import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../utils/api";
import toast from "react-hot-toast";
import { jwtDecode } from "jwt-decode";

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (info, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await api.post(`/auth/signup`, info, {
        withCredentials: true,
      });
      localStorage.setItem("jwt", data.token);

      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (info, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await api.post(`/auth/login`, info, {
        withCredentials: true,
      });
      localStorage.setItem("jwt", data.token);

      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const decodeToken = (token) => {
  if (token) {
    const userInfo = jwtDecode(token);
    return userInfo;
  } else {
    return "";
  }
};

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoading: false,
    userInfo: decodeToken(localStorage.getItem("jwt")),
  },
  reducers: {
    resetUser: (state, _) => {
      state.userInfo = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state, { payload }) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        toast.success(payload.status);
        const userInfo = decodeToken(payload.token);
        state.userInfo = userInfo;
      })
      .addCase(registerUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload.message);
      })
      //
      .addCase(loginUser.pending, (state, { payload }) => {
        state.loader = true;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.loader = false;
        toast.success(payload.status);
        const userInfo = decodeToken(payload.token);
        state.userInfo = userInfo;
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        state.loader = false;
        toast.error(payload.message);
      });
  },
});
export const { messageClear, resetUser } = authSlice.actions;
export default authSlice.reducer;
