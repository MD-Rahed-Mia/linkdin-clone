import React, { useEffect, useState } from "react";
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
