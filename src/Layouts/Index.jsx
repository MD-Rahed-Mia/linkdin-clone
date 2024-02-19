import React, { useEffect, useState } from "react";
import TopbarAuth from "../components/TopbarAuth";
import Topbar from "../components/Topbar";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../configAuth";

export default function Layout({ children }) {
  const [isAuthorize, setIsAuthorize] = useState(false);
  const [user, setUser] = useState({});

  //getting auth for check userStates
  useEffect(() => {
    onAuthStateChanged(auth, (res) => {
      if (res?.accessToken != null) {
        setIsAuthorize(true);
      }
    });
  }, []);

  return (
    <div className="w-3/5 mx-auto">
      {isAuthorize ? <TopbarAuth user={user} /> : <Topbar />}
      {children}
    </div>
  );
}
