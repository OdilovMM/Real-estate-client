import React from "react";
import { Cart, Map } from "../components";

const HomePage = () => {
  return (
    <div className="w-full my-5 min-h-[70vh]  flex flex-col justify-start items-start">
      <div>
        <h2 className="text-3xl font-bold text-slate-500 uppercase">
          Start searching your dream place
        </h2>
        <p className="text-2xl font-semibold ">
          Welcome to real estate marketplace
        </p>
      </div>

      <Map />

      <div>
        <h2>Recent places for advertising</h2>
        <div className="flex flex-row justify-start items-start">
          <Cart />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
