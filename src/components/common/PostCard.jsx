import React, { useMemo, useState } from "react";
import { IoSend } from "react-icons/io5";
import LikeButton from "./LIkeButton/LikeButton";
import { getCurrentUser, handleCommentOnPost } from "../../API/Firestore";
import CommentButton from "./CommentButton/CommentButton";
import uuid from "react-uuid";
import PostEdit from "./PostEdit";

export default function PostCard({ post, userOwn }) {
  const [currentUser, setCurrentUser] = useState({});
  const [isCommentOn, setIsCommentOn] = useState(false);
  const [inputComment, setInputComment] = useState("");
  useMemo(() => {
    getCurrentUser(setCurrentUser);
  }, []);

  function handleComment() {
    handleCommentOnPost(post.id, currentUser.userId, inputComment, currentUser);
  }
  return (
    <div className="w-full  p-3 mt-12 border-2 shadow-3 rounded-2xl relative z-10 items-stretch">
      <div className="flex items-center justify-left gap-2">
        <div className="w-[45px] h-[45px] rounded-full overflow-hidden flex items-center justify-center object-contai">
          <img
            src={post.profileImg}
            alt=""
            className="max-w-8 object-cover w-full h-full"
          />
        </div>
        <h2 className="text-xl font-semibold capitalize">{post.userName}</h2>
      </div>
      <p className="text-xs mt-2 ml-4">{post.time}</p>
      <hr className="my-4" />
      <h1 className="text-2xl pt-3 mb-5">{post.status}</h1>

      <div className="w-full bottom-0 left-0 grid grid-cols-3 items-center justify-evenly text-slate-600 border-t-2 ">
        <LikeButton userId={currentUser.userId} postId={post.id} post={post} />
        <CommentButton
          setIsCommentOn={setIsCommentOn}
          isCommentOn={isCommentOn}
        />
        <div className="py-1 px-1 flex  gap-3 items-center justify-center text-md cursor-pointer font-bold hover:bg-slate-200 rounded-md ">
          <IoSend />
          <p>Share</p>
        </div>

        {isCommentOn ? (
          <div className="min-w-full p-3">
            <div>
              <div>
                {post.commentItem &&
                  post.commentItem.map((item) => (
                    <div key={uuid()} className=" py-2 my-4 ml-10">
                      <div>
                        <img src="" alt="" />
                        <p className="capitalize text-sky-500">{item.name}</p>
                      </div>
                      <div className="flex items-center w-[300px] gap-1 ml-4">
                        <p className="">{item.comment}</p>
                        <span>▪️</span>
                        <p className="text-[11px]">{item.date}</p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            <div className="mt-3  mb-3 mx-3 gap-3 w-[300px] rounded-full flex items-center justify-between">
              <input
                type="text"
                placeholder="comment"
                className="w-full px-3 py-2 text-md border-2 inline-block  rounded-full"
                onChange={(e) => setInputComment(e.target.value)}
              />
              <button
                className="p-2 bg-[var(--primary-color)] text-white rounded-full cursor-pointer"
                onClick={handleComment}
                disabled={inputComment.length > 1 ? false : true}
              >
                comment
              </button>
            </div>
          </div>
        ) : (
          <div className="min-w-full p-3 hidden">
            <div className="mt-3 mb-3  mx-3 col-span-4 gap-3 w-full rounded-full flex items-center justify-between">
              <input
                type="text"
                placeholder="comment"
                className="w-full px-3 py-2 text-md border-2 inline-block  rounded-full"
                onChange={(e) => setInputComment(e.target.value)}
              />
              <button
                className="p-2 bg-[var(--primary-color)] text-white rounded-full cursor-pointer"
                onClick={handleComment}
                disabled={inputComment.length > 1 ? false : true}
              >
                comment
              </button>
            </div>
          </div>
        )}
      </div>
      {userOwn ? <PostEdit /> : ""}
    </div>
  );
}
