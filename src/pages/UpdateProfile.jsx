import React, { useState } from "react";
import { MdOutlineAddAPhoto } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { PulseLoader } from "react-spinners";
import { updateMe } from "../features/profile/userSlice";

const UpdateProfile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userInfo, isLoading } = useSelector((state) => state.auth);
  const { userMe } = useSelector((state) => state.user);

  const [avatar, setAvatar] = useState(null);

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    setAvatar(file);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    if (avatar) {
      formData.append("avatar", avatar);
    }
    console.log(avatar)
    const { username, firstName, lastName, email } =
      Object.fromEntries(formData);

    dispatch(updateMe({ username, firstName, lastName, email, avatar }));
    navigate("/profile/my-information");
  };

  const handleDeleteMe = async () => {};

  return (
    <div className=" w-full h-full flex justify-between gap-4 items-start ">
      <div className="w-[90%] my-8 mx-auto flex flex-col justify-between gap-3">
        <div className="flex flex-col justify-between items-start">
          <div className="flex flex-col justify-between w-full">
            <div className="flex justify-between w-full items-center">
              <h2 className="my-2 font-bold text-[18px]">Update Me</h2>
            </div>
            <form onSubmit={handleUpdate}>
              <div className="flex flex-row justify-between">
                <div className="flex flex-col gap-5 w-6/12">
                  <div className="relative">
                    <label className="flex  items-center mb-2 text-gray-600 text-xs font-medium">
                      First Name{" "}
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      id="firstName"
                      defaultValue={userMe.firstName}
                      className="block w-full max-w-xs  px-4 py-2 text-sm font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none leading-relaxed"
                      placeholder="First Name"
                      required=""
                    />
                  </div>
                  <div className="relative">
                    <label className="flex  items-center mb-2 text-gray-600 text-xs font-medium">
                      Last Name{" "}
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      id="lastName"
                      defaultValue={userMe.lastName}
                      className="block w-full max-w-xs px-4 py-2 text-sm font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none leading-relaxed"
                      placeholder="Last Name"
                      required=""
                    />
                  </div>
                  <div className="relative">
                    <label className="flex  items-center mb-2 text-gray-600 text-xs font-medium">
                      Username{" "}
                    </label>
                    <input
                      type="text"
                      name="username"
                      id="username"
                      defaultValue={userMe.username}
                      className="block w-full max-w-xs px-4 py-2 text-sm font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none leading-relaxed"
                      placeholder="Username"
                      required=""
                    />
                  </div>
                  <div className="relative">
                    <label className="flex  items-center mb-2 text-gray-600 text-xs font-medium">
                      Email{" "}
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      defaultValue={userMe.email}
                      className="block w-full max-w-xs px-4 py-2 text-sm font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none leading-relaxed"
                      placeholder="email"
                      required=""
                    />
                  </div>
                </div>
                <div className="w-6/12">
                  <div className="mt-2 flex flex-col justify-center items-center ">
                    <div>
                      <label
                        htmlFor="avatar"
                        className="block text-sm font-medium text-gray-700"
                      ></label>
                      <div className="mt-2 flex items-center relative">
                        <div className="inline-block rounded-full w-[290px] h-[280px] overflow-hidden relative border-black shadow-3xl">
                          {avatar ? (
                            <img
                              src={URL.createObjectURL(avatar)}
                              alt="avatar"
                              className="h-full w-full object-cover"
                            />
                          ) : (
                            <img
                              src={
                                `http://localhost:5000/images/users/${userMe.avatar} ` ||
                                "default.jpg"
                              }
                              alt="avatar"
                              className="h-full w-full object-cover border"
                            />
                          )}
                        </div>
                        <label
                          htmlFor="file-input"
                          className="cursor-pointer z-[9999] absolute bottom-[0px] right-[0px] "
                        >
                          <span>
                            <MdOutlineAddAPhoto color="black" size={45} />
                          </span>
                          <input
                            type="file"
                            name="avatar"
                            id="file-input"
                            accept=".jpg,.jpeg,.png"
                            onChange={handleFileInputChange}
                            className="sr-only "
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <button
                disabled={isLoading}
                className="relative mt-4 w-full inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
              >
                <span className="relative w-full  px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  {isLoading ? (
                    <PulseLoader size={12} color="white" />
                  ) : (
                    "Save Changes"
                  )}
                </span>
              </button>
            </form>
            <button
              disabled={isLoading}
              className="relative mt-4 w-full inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
            >
              <span className="relative w-full  px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                {isLoading ? (
                  <PulseLoader size={12} color="white" />
                ) : (
                  "Delete Me"
                )}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
