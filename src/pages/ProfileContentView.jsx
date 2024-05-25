import { Outlet } from "react-router-dom";

const ProfileContentView = () => {
  return (
    <div className="w-9/12 md:w-full ">
      <Outlet />
    </div>
  );
};

export default ProfileContentView;
