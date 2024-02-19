import React, { useEffect, useState } from "react";
import { uploadProfileImage } from "../../API/FireStorage";

export default function ProfileInfo({ user }) {
  const [uploadFile, setUploadFile] = useState(null);
  function handleFileInput(e) {}
  return (
    <div className="border-cyan-400">
      <div>
        <div className="flex items-center relative rounded-full w-fit h-fit p-1 border-4 object-cover overflow-hidden bg-slate-50 border-cyan-300">
          <label htmlFor="profile-img">
            <input
              type="file"
              className="outline-none h-full w-full hidden"
              id="profile-img"
              accept="image/*"
              onChange={(e) => {
                handleFileInput(e);
                uploadProfileImage(e.target.files[0]);
              }}
            />
            <img
              src={user.currentUser.profileImageUrl}
              alt=""
              className="w-24 object-fill h-24"
            />
          </label>
        </div>
        <h1 className="text-3xl font-semibold capitalize">
          {user.currentUser.name}
        </h1>
        <p className="text-md font-sans">{user.currentUser.email}</p>
        <p className="mt-4 text-2xl">{user.currentUser.education}</p>
        <p className="mt-4 text-2xl">Skills: {user.currentUser.skills}</p>
        <p className="text-md">{user.currentUser.company}</p>
        <p className="text-md">{user.currentUser.number}</p>
        <p className="text-md">{user.currentUser.bio}</p>
      </div>
    </div>
  );
}
