import React from "react";
import { useSelector } from "react-redux";

const ProfilePage = () => {
  const { userInfo } = useSelector((state) => state.auth);
  console.log(userInfo);
  return <div>ProfilePage</div>;
};

export default ProfilePage;
