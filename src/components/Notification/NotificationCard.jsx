import React from "react";
import { CiMenuKebab } from "react-icons/ci";
import uuid from "react-uuid";

export default function NotificationCard({ notice }) {
  return (
    <div
      key={uuid()}
      className="w-full flex justify-between items-center px-2 py-3 border-b-2"
    >
      <div className="p-2">
        <img src={notice.userProfileImg} alt="" style={{ maxWidth: "50px" }} />
      </div>
      <div>
        <h2>{notice.notice}</h2>
        <a href={`post/${notice.postId}`}>view post</a>
      </div>
      <div>
        <CiMenuKebab className="text-3xl cursor-pointer" />
      </div>
    </div>
  );
}
