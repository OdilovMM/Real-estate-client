import React, { useState } from "react";
import { LuImagePlus } from "react-icons/lu";
import { TbTrashFilled } from "react-icons/tb";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useNavigate } from "react-router-dom";
import { CiCircleRemove } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../features/posts/postSlice";
import { PulseLoader } from "react-spinners";

import toast from "react-hot-toast";

const AddPostPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading } = useSelector((state) => state.post);
  const { userInfo } = useSelector((state) => state.auth);

  const [images, setImages] = useState([]);
  const [showImage, setImageShow] = useState([]);
  const [value, setValue] = useState("");

  const [post, setPost] = useState({
    title: "",
    price: "",
    address: "",
    city: "",
    zipCode: "",
    bedroom: "",
    bathroom: "",
    kitchen: "",
    parking: "",
    latitude: "",
    longitude: "",
    type: "",
    property: "",
    description: "",
    area: "",
    school: "",
    bus: "",
    restaurant: "",
    supermarket: "",
  });

  const handleInput = (e) => {
    setPost({
      ...post,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageInput = (e) => {
    const files = e.target.files;
    const length = files.length;
    if (length > 0) {
      setImages([...images, ...files]);
      let imgUrl = [];
      for (let i = 0; i < length; i++) {
        imgUrl.push({ url: URL.createObjectURL(files[i]) });
      }
      setImageShow([...showImage, ...imgUrl]);
    }
  };

  const handleChangeImage = (img, index) => {
    if (img) {
      let tempUrl = [...showImage];
      let tempImages = [...images];

      tempImages[index] = img;
      tempUrl[index] = { url: URL.createObjectURL(img) };
      setImageShow(tempUrl);
      setImages(tempImages);
    }
  };

  const handleDeleteSelected = (i) => {
    const filterImg = images.filter((img, index) => index !== i);
    const filterImageUrl = showImage.filter((img, index) => index !== i);

    setImages(filterImg);
    setImageShow(filterImageUrl);
  };

  const handleAddPost = async (e) => {
    e.preventDefault();

  

    const formData = new FormData();

    formData.append("title", post.title);
    formData.append("price", post.price);
    formData.append("address", post.address);
    formData.append("city", post.city);
    formData.append("zipCode", post.zipCode);
    formData.append("bedroom", post.bedroom);
    formData.append("bathroom", post.bathroom);
    formData.append("kitchen", post.kitchen);
    formData.append("parking", post.parking);
    formData.append("latitude", post.latitude);
    formData.append("latitude", post.latitude);
    formData.append("longitude", post.longitude);
    formData.append("type", post.type);
    formData.append("property", post.property);
    formData.append("description", value);
    formData.append("area", post.area);
    formData.append("school", post.school);
    formData.append("bus", post.bus);
    formData.append("restaurant", post.restaurant);
    formData.append("supermarket", post.supermarket);
    formData.append("description", value);

    for (let i = 0; i < images.length; i++) {
      formData.append("images", images[i]);
    }

    for (let [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }

    dispatch(addPost(formData));

    setPost({
      title: "",
      price: "",
      address: "",
      city: "",
      zipCode: "",
      bedroom: "",
      bathroom: "",
      kitchen: "",
      parking: "",
      latitude: "",
      longitude: "",
      type: "",
      property: "",
      description: "",
      area: "",
      school: "",
      bus: "",
      restaurant: "",
      supermarket: "",
    });

    setValue("");
  };

  return (
    <div>
      <form
        onSubmit={handleAddPost}
        className=" w-full flex flex-col  gap-4 items-start m-2"
      >
        <div className=" w-[95%] mx-auto flex flex-col justify-between gap-2">
          <h2>Add New Post</h2>
          <div>
            <div className="flex flex-col gap-5">
              <div className="flex flex-col justify-between gap-3">
                <div>
                  <h2>Information</h2>
                </div>
                <div className="flex flex-row justify-between  items-center">
                  <div className="relative">
                    <label className="flex  items-center mb-2 text-gray-600 text-xs font-medium">
                      Title
                    </label>
                    <input
                      type="text"
                      name="title"
                      onChange={handleInput}
                      value={post.title}
                      id="title"
                      className="block w-full max-w-xs px-4 py-2 text-sm font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none leading-relaxed"
                      placeholder="Title"
                      required=""
                    />
                  </div>

                  <div className="relative">
                    <label className="flex  items-center mb-2 text-gray-600 text-xs font-medium">
                      Price
                    </label>
                    <input
                      type="number"
                      onChange={handleInput}
                      value={post.price}
                      min={0}
                      max={1000000000000}
                      name="price"
                      id="price"
                      className="block w-full max-w-xs px-4 py-2 text-sm font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none leading-relaxed"
                      placeholder="Price"
                      required=""
                    />
                  </div>

                  <div className="relative">
                    <label className="flex  items-center mb-2 text-gray-600 text-xs font-medium">
                      Type
                    </label>
                    <select
                      type="text"
                      onChange={handleInput}
                      value={post.type}
                      name="type"
                      id="type"
                      className="block w-[195px] px-4 py-2 text-sm font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none leading-relaxed"
                      placeholder="Enter property type"
                      required=""
                    >
                      <option value="">Chose Service Type</option>
                      <option value="buy">Buy</option>
                      <option value="rent">Rent</option>
                    </select>
                  </div>

                  <div className="relative">
                    <label className="flex  items-center mb-2 text-gray-600 text-xs font-medium">
                      Property
                    </label>
                    <select
                      type="text"
                      onChange={handleInput}
                      value={post.property}
                      name="property"
                      id="property"
                      className="block w-[195px] px-4 py-2 text-sm font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none leading-relaxed"
                      placeholder="Enter Type"
                      required=""
                    >
                      <option value="">Chose Property Type</option>
                      <option value="apartment">Apartment</option>
                      <option value="house">House</option>
                      <option value="condo">Condo</option>
                      <option value="land">Land</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="h-[220px] max-w-[850px]">
                <label>Description</label>
                <ReactQuill
                  theme="snow"
                  className="h-[160px]"
                  value={value}
                  onChange={setValue}
                />
              </div>

              <div className="flex flex-col justify-between gap-3">
                <div>
                  <h2>Address Information</h2>
                </div>
                <div className="flex flex-row justify-between gap-3">
                  <div className="relative">
                    <label className="flex  items-center mb-2 text-gray-600 text-xs font-medium">
                      City
                    </label>
                    <input
                      type="text"
                      onChange={handleInput}
                      value={post.city}
                      name="city"
                      id="city"
                      className="block w-full max-w-xs px-4 py-2 text-sm font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none leading-relaxed"
                      placeholder="City"
                      required=""
                    />
                  </div>

                  <div className="relative">
                    <label className="flex  items-center mb-2 text-gray-600 text-xs font-medium">
                      Address
                    </label>
                    <input
                      type="text"
                      name="address"
                      onChange={handleInput}
                      value={post.address}
                      id="address"
                      className="block w-full max-w-xs px-4 py-2 text-sm font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none leading-relaxed"
                      placeholder="address"
                      required=""
                    />
                  </div>

                  <div className="relative">
                    <label className="flex  items-center mb-2 text-gray-600 text-xs font-medium">
                      Zip Code
                    </label>
                    <input
                      type="text"
                      name="zipCode"
                      onChange={handleInput}
                      value={post.zipCode}
                      id="zipCode"
                      className="block w-full max-w-xs px-4 py-2 text-sm font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none leading-relaxed"
                      placeholder="Zip Code"
                      required=""
                    />
                  </div>

                  <div className="relative">
                    <label className="flex  items-center mb-2 text-gray-600 text-xs font-medium">
                      Area Size
                    </label>
                    <input
                      type="number"
                      onChange={handleInput}
                      value={post.area}
                      min={0}
                      name="area"
                      id="area"
                      className="block w-full max-w-xs px-4 py-2 text-sm font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none leading-relaxed"
                      placeholder="Enter area"
                      required=""
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-between gap-3">
                <div>
                  <h2>Map Location Coordinates</h2>
                </div>
                <div className="flex flex-row justify-start gap-[52px]">
                  <div className="relative">
                    <label className="flex  items-center mb-2 text-gray-600 text-xs font-medium">
                      Latitude
                    </label>
                    <input
                      type="text"
                      onChange={handleInput}
                      value={post.latitude}
                      name="latitude"
                      id="latitude"
                      className="block w-full max-w-xs px-4 py-2 text-sm font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none leading-relaxed"
                      placeholder="Enter Location Latitude"
                      required=""
                    />
                  </div>
                  <div className="relative">
                    <label className="flex  items-center mb-2 text-gray-600 text-xs font-medium">
                      Longitude
                    </label>
                    <input
                      type="text"
                      name="longitude"
                      onChange={handleInput}
                      value={post.longitude}
                      id="longitude"
                      className="block w-full max-w-xs px-4 py-2 text-sm font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none leading-relaxed"
                      placeholder="Enter Location Longitude"
                      required=""
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-between gap-3">
                <div>
                  <h2>Availability</h2>
                </div>
                <div className="flex flex-row justify-between gap-3">
                  <div className="relative">
                    <label className="flex  items-center mb-2 text-gray-600 text-xs font-medium">
                      Number Of Bedroom
                    </label>
                    <input
                      type="number"
                      onChange={handleInput}
                      value={post.bedroom}
                      min={0}
                      name="bedroom"
                      id="bedroom"
                      className="block w-full max-w-xs px-4 py-2 text-sm font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none leading-relaxed"
                      placeholder="Available bedroom"
                      required=""
                    />
                  </div>

                  <div className="relative">
                    <label className="flex  items-center mb-2 text-gray-600 text-xs font-medium">
                      Number Of Bathroom
                    </label>
                    <input
                      type="number"
                      onChange={handleInput}
                      value={post.bathroom}
                      min={0}
                      name="bathroom"
                      id="bathroom"
                      className="block w-full max-w-xs px-4 py-2 text-sm font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none leading-relaxed"
                      placeholder="Available bathroom"
                      required=""
                    />
                  </div>

                  <div className="relative">
                    <label className="flex  items-center mb-2 text-gray-600 text-xs font-medium">
                      Number Of Kitchen
                    </label>
                    <input
                      type="number"
                      onChange={handleInput}
                      value={post.kitchen}
                      min={0}
                      name="kitchen"
                      id="kitchen"
                      className="block w-full max-w-xs px-4 py-2 text-sm font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none leading-relaxed"
                      placeholder="Available Kitchen"
                      required=""
                    />
                  </div>

                  <div className="relative">
                    <label className="flex  items-center mb-2 text-gray-600 text-xs font-medium">
                      Number Of Parking
                    </label>
                    <input
                      type="number"
                      onChange={handleInput}
                      value={post.parking}
                      name="parking"
                      id="parking"
                      className="block w-full max-w-xs px-4 py-2 text-sm font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none leading-relaxed"
                      placeholder="Available parking"
                      required=""
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-between gap-3">
                <div>
                  <h2>Nearby Locations</h2>
                </div>
                <div className="flex flex-row justify-between gap-3">
                  <div className="relative">
                    <label className="flex  items-center mb-2 text-gray-600 text-xs font-medium">
                      Bus Stops
                    </label>
                    <input
                      type="text"
                      onChange={handleInput}
                      value={post.bus}
                      name="bus"
                      id="bus"
                      className="block w-full max-w-xs px-4 py-2 text-sm font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none leading-relaxed"
                      placeholder="Enter nearby bus stops"
                      required=""
                    />
                  </div>
                  <div className="relative">
                    <label className="flex  items-center mb-2 text-gray-600 text-xs font-medium">
                      Nearby Schools
                    </label>
                    <input
                      type="text"
                      name="school"
                      onChange={handleInput}
                      value={post.school}
                      id="school"
                      className="block w-full max-w-xs px-4 py-2 text-sm font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none leading-relaxed"
                      placeholder="Enter nearby school"
                      required=""
                    />
                  </div>
                  <div className="relative">
                    <label className="flex  items-center mb-2 text-gray-600 text-xs font-medium">
                      Nearby Restaurants
                    </label>
                    <input
                      type="text"
                      name="restaurant"
                      onChange={handleInput}
                      value={post.restaurant}
                      id="restaurant"
                      className="block w-full max-w-xs px-4 py-2 text-sm font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none leading-relaxed"
                      placeholder="Enter nearby Restaurants"
                      required=""
                    />
                  </div>

                  <div className="relative">
                    <label className="flex  items-center mb-2 text-gray-600 text-xs font-medium">
                      Nearby Supermarkets
                    </label>
                    <input
                      type="text"
                      name="supermarket"
                      onChange={handleInput}
                      value={post.supermarket}
                      id="supermarket"
                      className="block w-full max-w-xs px-4 py-2 text-sm font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none leading-relaxed"
                      placeholder="Enter nearby Supermarkets"
                      required=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="mt-2 ml-6 flex flex-col justify-center items-center ">
            <div className=" grid lg:grid-cols-4  grid-cols-4 md:grid-cols-4 sm:grid-cols-2 sm:gap-4 md:gap-4 gap-3 w-full text-white mb-4">
              {showImage.map((img, index) => (
                <div
                  key={index}
                  className="h-[180px] relative rounded-lg overflow-hidden"
                >
                  <label htmlFor={index}>
                    <img
                      src={img.url}
                      alt=""
                      className="w-full h-full bg-slate-400 rounded-sm object-cover hover:scale-105 transition-all hover:opacity-70 duration-400"
                    />
                  </label>
                  <input
                    type="file"
                    id={index}
                    className="hidden"
                    onChange={(e) =>
                      handleChangeImage(e.target.files[0], index)
                    }
                  />
                  <span
                    onClick={() => handleDeleteSelected(index)}
                    className=" z-10 cursor-pointer bg-white rounded-full  text-white absolute top-0 right-0"
                  >
                    <CiCircleRemove size={24} color="black" />
                  </span>
                </div>
              ))}
              <label
                htmlFor="image"
                className="flex justify-center bg-slate-300 items-center flex-col h-[180px] cursor-pointer border hover:border-red-600 w-[210px] rounded-lg text-white "
              >
                <span>
                  <LuImagePlus color="black" size={80} />
                </span>
                <span className="text-black">Add at least 5 images</span>
              </label>
              <input
                multiple
                type="file"
                className="hidden"
                onChange={handleImageInput}
                name=""
                id="image"
              />
            </div>
          </div>
        </div>
        <div className="ml-4 flex flex-row justify-between  items-center">
          <div className="flex justify-center items-center w-[250px]">
            <button
              disabled={isLoading}
              className="relative mt-4 w-full inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
            >
              <span className="relative w-full  px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                {isLoading ? (
                  <PulseLoader size={12} color="white" />
                ) : (
                  "Create Post"
                )}
              </span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddPostPage;
