import React from "react";
import { SlLike } from "react-icons/sl";
import { FaCommentAlt } from "react-icons/fa";
import { IoSend } from "react-icons/io5";

export default function PostCard({ post, postId }) {
  return (
    <div
      key={postId}
      className="w-full min-h-[450px] p-3 mt-12 border-2 shadow-3 rounded-2xl relative"
    >
      <p>{post.time}</p>
      <h1 className="text-3xl ">{post}</h1>

      <div className="absolute w-full bottom-0 left-0 flex items-center justify-evenly text-slate-600 border-t-2 p-2">
        <div className="py-4 px-8  flex gap-3 items-center justify-center text-xl cursor-pointer font-bold hover:bg-slate-200 rounded-md ">
          <SlLike />
          <p>Like</p>
        </div>
        <div className="py-4 px-8 flex  gap-3 items-center justify-center text-xl cursor-pointer font-bold hover:bg-slate-200 rounded-md ">
          <FaCommentAlt />
          <p>Comment</p>
        </div>
        <div className="py-4 px-8 flex  gap-3 items-center justify-center text-xl cursor-pointer font-bold hover:bg-slate-200 rounded-md ">
          <IoSend />
          <p>Share</p>
        </div>
      </div>
    </div>
  );
}
