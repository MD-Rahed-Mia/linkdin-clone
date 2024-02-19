import React, { useState } from "react";
import Linkedin from "./../assets/linkdin.png";
import { IoMdSearch } from "react-icons/io";
import { MdHomeFilled, MdMessage } from "react-icons/md";
import { IoBagHandle, IoNotifications, IoPeople } from "react-icons/io5";
import { RiUserHeartFill } from "react-icons/ri";
import ProfileBox from "./common/ProfileBox";

export default function TopbarAuth({ user }) {
  const [profileBox, setprofileBox] = useState(false);

  function handleProfileBox(e) {
    setprofileBox(!profileBox);
  }
  return (
    <div className="p-4 flex justify-between items-center">
      <div className="flex">
        <div>
          <img src={Linkedin} alt="" className="max-w-10  mx-4" />
        </div>
        <div className="flex gap-3 items-center justify-center text-lg p-1 bg-slate-200 rounded-md max-w-80">
          <IoMdSearch className="" />
          <input
            type="text"
            className="max-w-80 bg-transparent outline-none"
            placeholder="search"
          />
        </div>
      </div>
      <div className="flex gap-4">
        <a href="/" className="tobar-auth-Items">
          <MdHomeFilled className="text-2xl" />
          <p className="text-sm">Home</p>
        </a>
        <div className="tobar-auth-Items">
          <IoPeople />
          <p>People</p>
        </div>
        <div className="tobar-auth-Items">
          <IoBagHandle />
          <p>Jobs</p>
        </div>
        <div className="tobar-auth-Items">
          <MdMessage />
          <p>Message</p>
        </div>
        <div className="tobar-auth-Items">
          <IoNotifications />
          <a href="/notification">Notifications</a>
        </div>
        <div
          className="tobar-auth-Items relative"
          onClick={(e) => handleProfileBox(e)}
        >
          <RiUserHeartFill />
          <p>Me</p>
          {profileBox ? (
            <ProfileBox profileBox={profileBox} setprofileBox={setprofileBox} />
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}
