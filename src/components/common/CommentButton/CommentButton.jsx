import React from "react";
import { RiMessage3Fill } from "react-icons/ri";

export default function ({ setIsCommentOn, isCommentOn }) {
  function handleComment() {
    setIsCommentOn(!isCommentOn);
  }
  return (
    <div>
      <div
        className="py-1 px-1 flex  gap-3 items-center justify-center text-md cursor-pointer font-bold hover:bg-slate-200 rounded-md "
        onClick={handleComment}
      >
        <RiMessage3Fill />
        <p>Comment</p>
      </div>
    </div>
  );
}
