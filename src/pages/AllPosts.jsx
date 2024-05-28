import React, { forwardRef, useEffect } from "react";
import { LuTimer } from "react-icons/lu";
import { MdOutlineCurrencyExchange } from "react-icons/md";
import { GiCash } from "react-icons/gi";
import { BiMoneyWithdraw } from "react-icons/bi";
import { FixedSizeList as List } from "react-window";
import { useDispatch, useSelector } from "react-redux";
import { deletePost, getMyPosts } from "../features/posts/postSlice";
import { TbTrashFilled } from "react-icons/tb";
import { MdOutlineViewInAr } from "react-icons/md";

function handleOnWheel({ deltaY }) {}
const outerElType = forwardRef((props, ref) => (
  <div ref={ref} onWheel={handleOnWheel} {...props} />
));

const AllPosts = () => {
  const dispatch = useDispatch();
  const { posts, postCount, isLoading } = useSelector((state) => state.post);
  const { userInfo } = useSelector((state) => state.auth);

  const userId = userInfo.id;

  useEffect(() => {
    dispatch(getMyPosts(userId));
  }, [dispatch, userId]);

  const handleDeletePost = (postId) => {
    dispatch(deletePost(postId));
    dispatch(getMyPosts(userId));
  };

  const Row = ({ index, style }) => {
    return (
      <div style={style} className="flex text-sm gap-2 flex-row">
        <div className="w-[5%] p-2 whitespace-nowrap  text-[#080808]">
          {index + 1}
        </div>
        <div className="w-[15%] p-2 whitespace-nowrap  text-[#080808]">
          <div className="w-[45px] h-[35px] overflow-hidden rounded-lg">
            <img
              className="w-full h-full"
              src={`http://localhost:5000/images/post/${posts[index]?.images[0]}`}
              alt=""
            />
          </div>
        </div>
        <div className="w-[20%] p-2 whitespace-nowrap text-[#080808]">
          {posts[index]?.title}
        </div>
        <div className="w-[20%] p-2 whitespace-nowrap">
          <span className="px-3 py-1  text-[#080808] rounded-[3px]">
            {posts[index]?.price}
          </span>
        </div>
        <div className="w-[20%] p-2 whitespace-nowrap text-[#080808]">
          {posts[index]?.city}
        </div>
        <div className="w-[10%] p-2 whitespace-nowrap text-[#080808]">
          <div className="flex flex-row justify-between w-full ">
            <button onClick={() => handleDeletePost(posts[index]?._id)}>
              <TbTrashFilled />
            </button>

            <button>
              <MdOutlineViewInAr />
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full h-full">
      <div className="w-[95%] mx-auto ">
        <div className="bg-[#dee1e3] text-black rounded-[5px] p-5">
          <h2 className="p-4">My Posts</h2>
          <div>
            <div className="w-full  overflow-x-auto">
              <div className="flex flex-row justify-between bg-[#e7ecf0] uppercase text-[#191010] text-xs font-bold min-w-[340px] rounded-md">
                <div className="w-[5%] p-2 text-center"> No </div>
                <div className="w-[15%] p-2 text-center"> Image </div>
                <div className="w-[20%] p-2 text-center"> Title </div>
                <div className="w-[20%] p-2 text-center"> Price </div>
                <div className="w-[20%] p-2 text-center"> City </div>
                <div className="w-[20%] p-2 text-center"> Actions </div>
              </div>
              {
                <List
                  style={{ minWidth: "340px" }}
                  className="List"
                  height={300}
                  itemCount={posts?.length}
                  itemSize={50}
                  outerElementType={outerElType}
                >
                  {Row}
                </List>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllPosts;
