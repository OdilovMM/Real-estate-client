import React from "react";
import { Cart, Map } from "../components";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getLatestRentAndBuy } from "../features/posts/postSlice";

const HomePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { latestRent, latestBuy, allPosts } = useSelector(
    (state) => state.post
  );

  useEffect(() => {
    dispatch(getLatestRentAndBuy());
  }, [dispatch]);

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

      <Map items={allPosts} />

      <div>
        <h2 className="font-bold py-4 text-2xl text-gray-500">
          Recent places for rent
        </h2>
        <div className="flex flex-row flex-wrap gap-3  justify-start items-start">
          {latestRent &&
            latestRent.map((rent, index) => {
              return <Cart item={rent} key={index} />;
            })}
        </div>
      </div>
      <div>
        <h2 className="font-bold py-4 text-2xl text-gray-500">
          Recent places for buy
        </h2>
        <div className="flex flex-row flex-wrap gap-3 justify-start items-start">
          {latestRent &&
            latestBuy.map((buy, index) => {
              return <Cart item={buy} key={index} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
