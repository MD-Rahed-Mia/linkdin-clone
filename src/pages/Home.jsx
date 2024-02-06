import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../configAuth";
import { useNavigate } from "react-router-dom";
import Loader from "../components/common/Loader";
import Homes from "../components/Home";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const navigator = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (res) => {
      if (res?.accessToken != null) {
        setLoading(false);
      } else {
      }
    });
  });
  return <div>{loading ? <Loader /> : <Homes />}</div>;
}
