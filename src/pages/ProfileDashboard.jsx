import { CiHome, CiShoppingTag } from "react-icons/ci";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ProfileDashboard = () => {
  const { postCount, savedPostsCount } = useSelector((state) => state.post);

  return (
    <div className="w-full h-[75vh]  mx-auto  flex flex-row  justify-center items-start">
      <div className="w-[85%]  gap-3 flex flex-row">
        <Link
          to="/profile/view-posts"
          className="flex justify-between w-6/12 items-center shadow-xl p-5 border-b-[2px] bg-[#dfcbcb] rounded-md gap-3"
        >
          <div className="flex flex-col justify-start  items-start text-[#333]">
            <h2 className="text-3xl font-semibold">{postCount}</h2>
            <span className="text-md font-semibold">My Posts</span>
          </div>
          <div className="w-[45px] h-[45px] rounded-full justify-center items-center">
            <CiHome size={45} />
          </div>
        </Link>
        <Link
          to="/profile/saved-posts"
          className="flex justify-between w-6/12 items-center shadow-xl p-5 border-b-[2px] bg-[#dfcbcb] rounded-md gap-3"
        >
          <div className="flex flex-col justify-start  items-start text-[#333]">
            <h2 className="text-3xl font-semibold">{savedPostsCount}</h2>
            <span className="text-md font-semibold">My Saved Posts</span>
          </div>
          <div className="w-[45px] h-[45px] rounded-full justify-center items-center">
            <CiShoppingTag size={45} />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ProfileDashboard;
