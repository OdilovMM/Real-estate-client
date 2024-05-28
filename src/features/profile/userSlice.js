import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../utils/api";
import toast from "react-hot-toast";

export const updateMe = createAsyncThunk(
  "user/updateMe",
  async (
    { username, firstName, lastName, email, avatar },
    { rejectWithValue, fulfillWithValue }
  ) => {
    try {
      const formData = new FormData();
      formData.append("username", username);
      formData.append("firstName", firstName);
      formData.append("lastName", lastName);
      formData.append("email", email);
      if (avatar) {
        formData.append("avatar", avatar);
      }
      const { data } = await api.patch(`/users/updateMe`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      });

      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const getUserDetail = createAsyncThunk(
  "user/userDetail",
  async (userId, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await api.get(
        `/users/user-detail/${userId}`,
        {
          withCredentials: true,
        },
        { new: true }
      );
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState: {
    isLoading: false,
    userMe: "",
    users: [],
    totalUsers: 0,
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
      .addCase(updateMe.pending, (state, { payload }) => {
        state.isLoading = true;
      })
      .addCase(updateMe.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.userMe = payload.data.user;
        toast.success(payload.status);
        console.log(payload.data.user);
      })
      .addCase(updateMe.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload.message);
      })
      .addCase(getUserDetail.pending, (state, { payload }) => {
        state.isLoading = true;
      })
      .addCase(getUserDetail.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.userMe = payload.data;
        // toast.success(payload.status);
      })
      .addCase(getUserDetail.rejected, (state, { payload }) => {
        state.isLoading = false;
        console.log(payload);
        // toast.error(payload.message);
      });
  },
});
export const { messageClear, resetUser } = userSlice.actions;
export default userSlice.reducer;
