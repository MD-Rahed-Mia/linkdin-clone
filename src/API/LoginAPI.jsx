import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { auth, firestore } from "../configAuth";
import { toast } from "react-toastify";

//login api function
export const loginApi = async (email, password) => {
  try {
    const response = await signInWithEmailAndPassword(auth, email, password);
    localStorage.setItem("user", JSON.stringify(response.user.uid));
    localStorage.setItem("authUser", JSON.stringify(response));
    localStorage.setItem("userEmail", auth.currentUser.email);
    toast.success("login successful.");
    return response;
  } catch (error) {
    return error.message;
  }
};

export const RegisterApi = async (email, password) => {
  try {
    let res = await createUserWithEmailAndPassword(auth, email, password);
    return res;
  } catch (err) {}
};
