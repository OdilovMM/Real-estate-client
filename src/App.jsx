import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  GalleryPage,
  HomePage,
  LoginPage,
  ProfilePage,
  RegisterPage,
  SinglePage,
} from "./pages";
import Layout from "./layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="gallery" element={<GalleryPage />} />
          <Route path="gallery/:postId" element={<SinglePage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="profile" element={<ProfilePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
