import React from "react";
import { BiBath } from "react-icons/bi";
import { HiOutlineChatBubbleLeftEllipsis } from "react-icons/hi2";
import { IoIosPricetags } from "react-icons/io";
import { LuParkingCircle } from "react-icons/lu";
import { PiMapPinAreaBold } from "react-icons/pi";
import { RiRestaurant2Fill } from "react-icons/ri";
import { TbBedFlat, TbMeterSquare, TbRulerMeasure } from "react-icons/tb";
import { TiPin } from "react-icons/ti";
import { Link } from "react-router-dom";

const Cart = ({ item }) => {
  console.log(item);
  return (
    <div className="w-[300px] hover:shadow-2xl cursor-pointer  mb-4 flex flex-col rounded-lg overflow-hidden  shadow-xl">
      <div className="w-full h-[180px]  overflow-hidden">
        <img
          src={`http://localhost:5000/images/post/${item?.images[0]}`}
          alt=""
          className=" w-full h-full object-cover relative z-0  scale-120 transition-all duration-200 hover:scale-105 "
        />
      </div>
      <div className="w-full px-4 py-2 flex flex-col gap-1 justify-between items-start">
        <div className="flex justify-between flex-row w-full">
          <Link
            title="See details"
            to={`/gallery/detail/${item?.id}`}
            className="font-semibold  text-gray-600 text-[16px]"
          >
            {item?.title}
          </Link>
          <span className="font-bold capitalize px-2 py-[1px] bg-slate-200 text-gray-600 text-[16px]">
            For {item?.type}
          </span>
        </div>
        <div className="flex justify-normal items-center gap-2">
          <span>
            <PiMapPinAreaBold title="location" size={20} color="gray" />
          </span>
          <span className="font-semibold text-[13px] text-gray-700">
            {item?.city}
          </span>
        </div>
        <div className="flex justify-between items-center gap-2">
          <span>
            <IoIosPricetags size={20} color="gray" title="price" />
          </span>
          <span className="font-semibold text-[13px] px-[5px] py-[3px] rounded-sm bg-slate-100 text-gray-700">
            ${item?.price}
          </span>
          {item?.type === "rent" ? (
            <span className="font-semibold text-[13px] px-[5px] py-[3px] rounded-sm bg-yellow-300 text-gray-700">
              Monthly Payment
            </span>
          ) : (
            <></>
          )}
        </div>

        <div className="flex justify-between items-center gap-2">
          <span>
            <TbRulerMeasure size={20} color="gray" title="price" />
          </span>
          <span className="font-semibold text-[13px] px-1 py-1 rounded-sm  text-gray-700">
            {item?.area} (sqft)
          </span>
          {/* <span>
            <TbMeterSquare size={20} color="gray" title="price" />
          </span> */}
          {/* <span className="font-semibold text-[13px] px-1 py-1 rounded-sm  text-gray-700">
            {item?.area}
          </span> */}
        </div>

        <div className="flex flex-row justify-between w-full items-center ">
          <div className="flex flex-row justify-between items-baseline gap-2">
            <div className="flex flex-row justify-between items-center px-[5px] py-[3px] rounded-sm   gap-1">
              {" "}
              <span>
                <TbBedFlat size={20} color="gray" title="bedroom" />
              </span>{" "}
              <span className="text-[12px]">{item.bedroom}</span>
            </div>
            <div className="flex flex-row justify-between items-center gap-1 px-[5px] py-[3px] rounded-sm ">
              {" "}
              <span>
                <BiBath size={20} color="gray" title="bathroom" />
              </span>{" "}
              <span className="text-[12px]">{item.bathroom}</span>
            </div>
            <div className="flex flex-row justify-between items-center gap-1 px-[5px] py-[3px]  rounded-sm ">
              {" "}
              <span>
                <RiRestaurant2Fill size={20} color="gray" title="kitchen" />
              </span>{" "}
              <span className="text-[12px]">{item.kitchen}</span>
            </div>
            <div className="flex flex-row justify-between items-center gap-1 px-[5px] py-[3px] rounded-sm ">
              {" "}
              <span>
                <LuParkingCircle size={20} color="gray" title="parking" />
              </span>{" "}
              <span className="text-[12px]">{item.parking}</span>
            </div>
          </div>
          <div className="flex flex-row justify-between items-center gap-2 cursor-pointer">
            <Link className="p-1 rounded-md ">
              <TiPin size={22} color="gray" title="save" />
            </Link>
            <Link className="p-1 rounded-md  cursor-pointer">
              <HiOutlineChatBubbleLeftEllipsis
                size={22}
                color="gray"
                title="message"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
