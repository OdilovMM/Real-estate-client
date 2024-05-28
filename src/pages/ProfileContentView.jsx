import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getMyPosts } from "../features/posts/postSlice";

const ProfileContentView = () => {
  
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.auth);
  console.log(userInfo.id)

  useEffect(() => {
    dispatch(getMyPosts(userInfo.id));
  }, [dispatch, userInfo]);

  return (
    <div className="w-9/12 md:w-full ">
      <Outlet />
    </div>
  );
};

export default ProfileContentView;
