import { createContext, useEffect, useState } from "react";
import { auth } from "../configAuth";
import { onAuthStateChanged } from "firebase/auth";

export const userContext = createContext();

export function UserContextProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (res) => {
      setCurrentUser(res);
    });
  }, []);

  return (
    <userContext.Provider value={{ currentUser }}>
      {children}
    </userContext.Provider>
  );
}
