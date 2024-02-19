import React from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../configAuth";

function ProfileBox() {
  const nav = useNavigate();

  const handleSignout = async (e) => {
    e.preventDefault();
    try {
      const res = await signOut(auth);
      localStorage.removeItem("user");
      localStorage.removeItem("authUser");
      localStorage.removeItem("userEmail");
      nav("/login");
    } catch (error) {}
  };
  return (
    <div
      className="absolute top-[108%] w-[300px] right-0 z-50 bg-white p-2 min-h-24  border-2 rounded-xl"
      onClick={(e) => e.stopPropagation()}
    >
      <ul>
        <li className="py-2 px-4 text-2xl font-semibold text-slate-800 cursor-pointer hover:text-black">
          {auth.currentUser.displayName}
          <a
            href="/profile"
            className="block ml-3 text-lg bg-[var(--primary-color)] text-center py-1 text-white rounded-3xl cursor-pointer mt-3"
          >
            View Profile
          </a>
        </li>
        <li className="py-2 px-4 text-2xl font-semibold text-slate-800 cursor-pointer hover:text-black">
          Settings & Privacy
        </li>
        <li className="py-2 px-4 text-2xl font-semibold text-slate-800 cursor-pointer hover:text-black">
          Help
        </li>
        <li
          className="py-2 px-4 text-2xl font-semibold text-slate-800 cursor-pointer hover:text-black"
          onClick={(e) => handleSignout(e)}
        >
          sign out
        </li>
      </ul>
    </div>
  );
}

export default ProfileBox;
