import { useDispatch, useSelector } from "react-redux";
import { ProfileNavlink } from "../components";
import { ProfileContentView } from "../pages";
import { useEffect } from "react";
import { getUserDetail } from "../features/profile/userSlice";

const ProfileLayout = () => {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getUserDetail(userInfo.id));
  }, [dispatch, userInfo]);

  return (
    <div className="flex flex-row justify-between items-start my-4">
      <ProfileNavlink />
      <ProfileContentView />
    </div>
  );
};

export default ProfileLayout;
