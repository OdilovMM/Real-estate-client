import authSlice from "../features/auth/authSlice";
import postSlice from "../features/posts/postSlice";
import userSlice from "../features/profile/userSlice";

const root = {
  auth: authSlice,
  post: postSlice,
  user: userSlice,
};

export default root;
