import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProfileInfoPage = () => {
  const { userMe } = useSelector((state) => state.user);

  return (
    <div className="w-full h-full mt-4">
      <div className="w-[95%] my-[110px] mx-auto flex flex-row justify-start gap-8">
        <div className="w-[200px] h-[200px] border-black">
          <img
           src={`http://localhost:5000/images/users/${userMe.avatar}`}
            alt=""
          />
        </div>
        <div>
          <div className="flex flex-row justify-between items-center mt-8 w-[250px]">
            <h2 className="font-bold">Firstname</h2>
            <span>{userMe.firstName}</span>
          </div>
          <div className="flex flex-row justify-between w-[250px]">
            <h2 className="font-bold">Lastname</h2>
            <span>{userMe.lastName}</span>
          </div>
          <div className="flex flex-row justify-between w-[250px]">
            <h2 className="font-bold">username</h2>
            <span>{userMe.username}</span>
          </div>
          <div className="flex flex-row justify-between w-[250px]">
            <h2 className="font-bold">Email</h2>
            <span>{userMe.email}</span>
          </div>
          <div className="mt-[30px] ">
            <Link
              to="/profile/update-user"
              className="relative mt-4 w-full inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
            >
              <span className="relative w-full  px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Go To Update
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfoPage;
