import React from 'react';
import { BiBath } from 'react-icons/bi';
import { HiOutlineChatBubbleLeftEllipsis } from 'react-icons/hi2';
import { IoIosPricetags } from 'react-icons/io';
import { LuParkingCircle } from 'react-icons/lu';
import { PiMapPinAreaBold } from 'react-icons/pi';
import { RiRestaurant2Fill } from 'react-icons/ri';
import { TbBedFlat, TbMeterSquare, TbRulerMeasure } from 'react-icons/tb';
import { TiPin } from 'react-icons/ti';
import { Link } from 'react-router-dom';

const Cart = () => {
    return (
        <div className="w-full mb-4 flex flex-row gap-3">
        <div className="w-4/12 rounded-2xl overflow-hidden">
          <img
            // src={`http://localhost:5000/images/post/${item?.images[0]}`}
            alt=""
            className=" w-full h-auto relative z-0 rounded-lg scale-110 transition-all duration-200 hover:scale-105 "
          />
        </div>
        <div className="w-8/12 px-4 py-2 flex flex-col justify-between items-start">
          <div className="flex justify-between flex-row w-full">
            <Link
            //   to={`/gallery/detail/${item?.id}`}
              className="font-semibold  text-gray-600 text-[16px]"
            >
              {/* {item?.title} */}
            </Link>
          </div>
          <div className="flex justify-normal items-center gap-2">
            <span>
              <PiMapPinAreaBold title="location" size={20} color="gray" />
            </span>
            <span className="font-semibold text-[13px] text-gray-700">
              {/* {item?.address} */}
            </span>
          </div>
          <div className="flex justify-between items-center gap-2">
            <span>
              <IoIosPricetags size={20} color="gray" title="price" />
            </span>
            <span className="font-semibold text-[13px] px-[5px] py-[3px] rounded-sm bg-slate-100 text-gray-700">
              {/* ${item?.price} */}
            </span>
          </div>

          <div className="flex justify-between items-center gap-2">
            <span>
              <TbRulerMeasure size={20} color="gray" title="price" />
            </span>
            <span className="font-semibold text-[13px] px-1 py-1 rounded-sm  text-gray-700">
              {/* {item?.sqft} (sqft) */}
            </span>
            <span>
              <TbMeterSquare size={20} color="gray" title="price" />
            </span>
            <span className="font-semibold text-[13px] px-1 py-1 rounded-sm  text-gray-700">
              {/* {item?.sqft} */}
            </span>
          </div>

          <div className="flex flex-row justify-between w-full items-center ">
            <div className="flex flex-row justify-between items-baseline gap-2">
              <div className="flex flex-row justify-between items-center px-[5px] py-[3px] rounded-sm bg-slate-100  gap-1">
                {" "}
                <span>
                  <TbBedFlat size={20} color="gray" title="bedroom" />
                </span>{" "}
                <span className="text-[12px]">
                {/* {item.bedroom}  */}
                bedroom</span>
              </div>
              <div className="flex flex-row justify-between items-center gap-1 px-[5px] py-[3px] rounded-sm bg-slate-100">
                {" "}
                <span>
                  <BiBath size={20} color="gray" title="bathroom" />
                </span>{" "}
                <span className="text-[12px]">
                {/* {item.bathroom}  */}
                bathroom</span>
              </div>
              <div className="flex flex-row justify-between items-center gap-1 px-[5px] py-[3px]  rounded-sm bg-slate-100">
                {" "}
                <span>
                  <RiRestaurant2Fill size={20} color="gray" title="kitchen" />
                </span>{" "}
                <span className="text-[12px]">
                {/* {item.kitchen}  */}
                kitchen</span>
              </div>
              <div className="flex flex-row justify-between items-center gap-1 px-[5px] py-[3px] rounded-sm bg-slate-100">
                {" "}
                <span>
                  <LuParkingCircle
                    size={20}
                    color="gray"
                    // title={item.parking}
                  />
                </span>{" "}
                <span className="text-[12px]">
                {/* {item.parking}  */}
                parking</span>
              </div>
            </div>
            <div className="flex flex-row justify-between items-center gap-2 cursor-pointer">
              <Link className="p-1 rounded-md bg-slate-100">
                <TiPin size={22} color="gray" title="save" />
              </Link>
              <Link className="p-1 rounded-md bg-slate-100 cursor-pointer">
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