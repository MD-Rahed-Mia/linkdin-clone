import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../configAuth";
import { useNavigate } from "react-router-dom";
import Loader from "../components/common/Loader";
import PostStatus from "./PostStatus";
import { ToastContainer } from "react-toastify";

export default function Home() {
  return (
    <div>
      <ToastContainer />
      <PostStatus />
    </div>
  );
}
