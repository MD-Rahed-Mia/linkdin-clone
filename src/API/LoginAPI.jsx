import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { auth } from "../configAuth";

export const loginApi = async (email, password) => {
  try {
    let response = await signInWithEmailAndPassword(auth, email, password);
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
