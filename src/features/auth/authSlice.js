import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../utils/api";
import toast from "react-hot-toast";
import { jwtDecode } from "jwt-decode";

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (info, { rejectWithValue, fulfillWithValue }) => {
    console.log(info);
    try {
      const { data } = await api.post(`/auth/signup`, info, {
        withCredentials: true,
      });
      localStorage.setItem("accessToken", data.token);

      console.log(data);
      console.log(data.token);
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (info, { rejectWithValue, fulfillWithValue }) => {
    console.log(info);
    try {
      const { data } = await api.post(`/auth/login`, info, {
        withCredentials: true,
      });
      localStorage.setItem("accessToken", data.token);
      console.log(data);

      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const decodeToken = (token) => {
  if (token) {
    const userInfo = jwtDecode(token);
    console.log(userInfo);
    return userInfo;
  } else {
    return "";
  }
};

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoading: false,
    userInfo: decodeToken(localStorage.getItem("accessToken")),
  },
  reducers: {
    messageClear: (state, _) => {
      state.errorMessage = "";
      state.successMessage = "";
    },
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
        console.log(payload);
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
        state.errorMessage = payload.error;
        toast.error(payload.error);
      });
  },
});
export const { messageClear, resetUser } = authSlice.actions;
export default authSlice.reducer;
