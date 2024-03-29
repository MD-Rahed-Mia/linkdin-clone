import React, { useMemo, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { FaImage } from "react-icons/fa";
import { MdEventNote } from "react-icons/md";
import { GrArticle } from "react-icons/gr";
import ModalComponent from "./common/Modal/ModalComponent";
import { createPost } from "../API/Firestore";
import { getAllPost } from "../API/Firestore";
import PostCard from "./common/PostCard";
import { ToastContainer, toast } from "react-toastify";
import uuid from "react-uuid";

import Loader from "./common/Loader";

export default function PostStatus() {
  const [loading, setLoading] = useState(true);
  const [allPost, setAllPost] = useState([]);

  const [isModalOn, setIsModalOn] = useState(false);

  //handlepost status event here
  const handlePostStatus = async (event) => {
    try {
      const res = await createPost(event);
      toast.success("post successful.");
    } catch (error) {
      console.log(error);
    }
  };

  //use memo to get all the post here
  useMemo(() => {
    getAllPost(setAllPost, setLoading);
  }, []);

  return (
    <>
      <div className="w-2/3 mx-auto mt-3 border-2 p-3 shadow-md">
        <div className="flex items-center">
          <FaUserCircle className="text-5xl" />
          <button
            className="w-full p-3 text-left rounded-full outline-none border-2 m-2 "
            onClick={() => setIsModalOn(true)}
          >
            Start a post
          </button>
        </div>
        <div className="flex justify-evenly items-center p-2 ">
          <div className="flex items-center justify-center gap-3 text-lg cursor-pointer">
            <FaImage className="text-green-600" />
            <p>Media</p>
          </div>

          <div className="flex items-center justify-center gap-3 text-lg cursor-poi nter">
            <MdEventNote className="text-orange-600" />
            <p>Event</p>
          </div>
          <div className="flex items-center justify-center gap-3 text-lg cursor-pointer">
            <GrArticle className="text-orange-900" />
            <p>Write article</p>
          </div>
        </div>
        {isModalOn ? (
          <ModalComponent
            isModalOn={isModalOn}
            setIsModalOn={setIsModalOn}
            handlePostStatus={handlePostStatus}
          />
        ) : (
          ""
        )}
      </div>
      <div className="w-2/3 mx-auto mt-5 z-10">
        {allPost.length == 0 ? (
          <Loader isLoading={loading} />
        ) : (
          allPost.map((post) => {
            return <PostCard key={uuid()} post={post} userOwn={false} />;
          })
        )}
        <ToastContainer />
      </div>
    </>
  );
}
