import React from "react";
import { PulseLoader } from "react-spinners";

const UpdatePasswordPage = () => {
  const isLoading = false;

  return (
    <div className=" w-full h-[62vh] flex justify-between gap-4 items-start ">
      <div className="w-[90%] mx-auto flex flex-col justify-between gap-3">
        <div className="flex flex-col justify-between items-start">
          <div className="flex flex-col justify-between w-full">
            <div className="flex justify-between w-full items-center">
              <h2 className="my-2 font-bold text-[18px]">Update Password</h2>
            </div>
            <form
            // onSubmit={handleUpdate}
            >
              <div className="flex flex-row justify-between">
                <div className="flex flex-col gap-5 w-6/12">
                  <div className="relative">
                    <label className="flex  items-center mb-2 text-gray-600 text-xs font-medium">
                      Old Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      className="block w-full max-w-xs px-4 py-2 text-sm font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none leading-relaxed"
                      placeholder="First Name"
                      required=""
                    />
                  </div>
                  <div className="relative">
                    <label className="flex  items-center mb-2 text-gray-600 text-xs font-medium">
                      New Password
                    </label>
                    <input
                      type="password"
                      name="new-password"
                      id="new-password"
                      className="block w-full max-w-xs px-4 py-2 text-sm font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none leading-relaxed"
                      placeholder="Last Name"
                      required=""
                    />
                  </div>
                  <div className="relative">
                    <label className="flex  items-center mb-2 text-gray-600 text-xs font-medium">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      name="confirm-password"
                      id="confirm-password"
                      //   defaultValue={currentUser.data.user.username}
                      className="block w-full max-w-xs px-4 py-2 text-sm font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none leading-relaxed"
                      placeholder="Username"
                      required=""
                    />
                  </div>
                </div>
              </div>

              <button
                disabled={isLoading}
                className="px-2 py-2 bg-slate-400 w-[46%] mt-6 rounded-md text-white"
              >
                {isLoading ? (
                  <PulseLoader margin={3} color="white" />
                ) : (
                  "Update"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdatePasswordPage;
