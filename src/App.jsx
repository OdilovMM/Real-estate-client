import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  GalleryPage,
  HomePage,
  LoginPage,
  ProfileDashboard,
  RegisterPage,
  SinglePage,
  AddPostPage,
  AllPosts,
  SavedPostPage,
  ProfileInfoPage,
  UpdateProfile,
  UpdatePasswordPage,
} from "./pages";
import Layout from "./layout/Layout";
import ProfileLayout from "./layout/ProfileLayout";
import ProtectedRoute from "./utils/ProtectedRoute";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUserDetail } from "./features/profile/userSlice";

function App() {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo) {
      dispatch(getUserDetail(userInfo?.id));
    }
  }, [dispatch, userInfo]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="gallery" element={<GalleryPage />} />
          <Route path="gallery/:postId" element={<SinglePage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <ProfileLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<ProfileDashboard />} />
            <Route path="add-post" element={<AddPostPage />} />
            <Route path="view-posts" element={<AllPosts />} />
            <Route path="saved-posts" element={<SavedPostPage />} />
            <Route path="my-information" element={<ProfileInfoPage />} />
            <Route path="update-password" element={<UpdatePasswordPage />} />
            <Route path="update-user" element={<UpdateProfile />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
