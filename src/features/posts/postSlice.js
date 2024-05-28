import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../utils/api";
import toast from "react-hot-toast";

export const addPost = createAsyncThunk(
  "post/addPost",
  async (post, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await api.post("/posts/add-post", post, {
        withCredentials: true,
      });
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getMyPosts = createAsyncThunk(
  "post/userPosts",
  async (userId, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await api.get(`/users/get-profile-posts/${userId}`, {
        withCredentials: true,
      });
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const deletePost = createAsyncThunk(
  "post/deletePost",
  async (postId, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await api.delete(`/posts/delete-post/${postId}`, {
        withCredentials: true,
      });
      return fulfillWithValue({ postId, status: data.status });
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getLatestRentAndBuy = createAsyncThunk(
  "post/getLatestRentAndBuy",
  async (_, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await api.get(`/posts/latest-posts`, {
        withCredentials: true,
      });
      console.log(data);
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// export const updateProduct = createAsyncThunk(
//   "product/updateProduct",
//   async (product, { rejectWithValue, fulfillWithValue }) => {
//     try {
//       const { data } = await api.patch(`/products/update-product`, product, {
//         withCredentials: true,
//       });
//       return fulfillWithValue(data);
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );

// export const productImageUpdate = createAsyncThunk(
//   "product/updateProductImage",
//   async (
//     { oldImage, newImage, productId },
//     { rejectWithValue, fulfillWithValue }
//   ) => {
//     try {
//       const formData = new FormData();

//       formData.append("oldImage", oldImage);
//       formData.append("newImage", newImage);
//       formData.append("productId", productId);

//       const { data } = await api.patch(
//         `/products/update-product-image`,
//         formData,
//         {
//           withCredentials: true,
//         }
//       );
//       return fulfillWithValue(data);
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );

export const postSlice = createSlice({
  name: "post",
  initialState: {
    isLoading: false,
    posts: [],
    latestBuy: [],
    latestRent: [],
    allPosts: [],
    postCount: 0,
    savedPostsList: [],
    savedPostsCount: 0,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addPost.pending, (state, { payload }) => {
        state.isLoading = true;
      })
      .addCase(addPost.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        toast.success(payload.status);
      })
      .addCase(addPost.rejected, (state, { payload }) => {
        state.isLoading = false;
        console.log(payload);
        toast.error("Please Fill all the fields");
      })
      //user posts
      .addCase(getMyPosts.pending, (state, { payload }) => {
        state.isLoading = true;
      })
      .addCase(getMyPosts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.posts = payload.posts;
        state.postCount = payload.result;
      })
      .addCase(getMyPosts.rejected, (state, { payload }) => {
        state.isLoading = false;
        console.log(payload);
      })
      .addCase(deletePost.pending, (state, { payload }) => {
        state.isLoading = true;
      })
      .addCase(deletePost.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.posts = state.posts.filter((post) => post._id !== payload.postId);
        console.log(payload.postId);
        toast.success(payload.status);
      })
      .addCase(deletePost.rejected, (state, { payload }) => {
        state.isLoading = false;
        console.log(payload);
      })
      .addCase(getLatestRentAndBuy.pending, (state, { payload }) => {
        state.isLoading = true;
      })
      .addCase(getLatestRentAndBuy.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.latestBuy = payload.data.latestBuy;
        state.latestRent = payload.data.latestRent;
        state.allPosts = payload.data.allPosts;
        // state.posts = state.posts.filter((post) => post._id !== payload.postId);
        console.log(payload.data);
        // toast.success(payload.status);
      })
      .addCase(getLatestRentAndBuy.rejected, (state, { payload }) => {
        state.isLoading = false;
        console.log(payload);
      });
  },
});

export default postSlice.reducer;
