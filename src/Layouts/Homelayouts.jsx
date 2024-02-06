import React, { useEffect, useState } from "react";
import Home from "../pages/Home";
import Topbar from "../components/Topbar";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../configAuth";
import TopbarAuth from "../components/TopbarAuth";
import { ToastContainer } from "react-toastify";

export default function Homelayouts() {
  const [isAuthorize, setIsAuthorize] = useState(false);

  //getting auth for check userStates
  useEffect(() => {
    onAuthStateChanged(auth, (res) => {
      if (res?.accessToken != null) {
        setIsAuthorize(true);
      }
    });
  }, []);

  return (
    <div className="w-4/5 mx-auto ">
      {isAuthorize ? <TopbarAuth /> : <Topbar />}
      <Home />
    </div>
  );
}
