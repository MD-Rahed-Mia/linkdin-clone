import React from "react";
import { MdOutlineArticle } from "react-icons/md";
import { IoPeopleSharp } from "react-icons/io5";
import { RiFolderReduceFill } from "react-icons/ri";
import { IoBagHandleSharp } from "react-icons/io5";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="logo flex items-center p-2">
        <h1 className="text-2xl font-bold text-[color:var(--primary-color)]">
          Linked
        </h1>
        <img
          src="https://w7.pngwing.com/pngs/511/605/png-transparent-in-logo-linkedin-diduco-ab-icon-linkedin-blue-angle-text-thumbnail.png"
          alt=""
          className="max-w-8"
        />
      </div>
      <div className="flex gap-10">
        <div className="topbar-item">
          <MdOutlineArticle />
          <p>Article</p>
        </div>
        <div className="topbar-item">
          <IoPeopleSharp />
          <p>People</p>
        </div>
        <div className="topbar-item">
          <RiFolderReduceFill />
          <p>Learning</p>
        </div>
        <div className="topbar-item">
          <IoBagHandleSharp />
          <p>Jobs</p>
        </div>
        <div className="topbar-item px-5 py-2 hover:bg-slate-200 rounded-full">
          <p>Join Now</p>
        </div>
        <div className="border-2 px-5 py-2 text-lg text-[color:var(--primary-color)] cursor-pointer hover:bg-slate-200 rounded-full border-[color:var(--primary-color)]">
          sign in
        </div>
      </div>
    </div>
  );
}
