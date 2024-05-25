import { Outlet } from "react-router-dom";
import { ProfileNavlink } from "../components";
import { ProfileContentView } from "../pages";

const ProfileLayout = () => {
  return (
    <div className="flex flex-row justify-between items-start my-4">
      <ProfileNavlink />
      <ProfileContentView />
    </div>
  );
};

export default ProfileLayout;
