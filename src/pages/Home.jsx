import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../configAuth";
import { useNavigate } from "react-router-dom";
import Loader from "../components/common/Loader";
import Homes from "../components/Home";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const localUser = localStorage.getItem("userEmail");
    if (localUser) {
      setLoading(false);
    }
  });
  return <div>{loading ? <Loader /> : <Homes />}</div>;
}
