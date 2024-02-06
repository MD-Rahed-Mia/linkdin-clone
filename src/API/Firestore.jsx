import { toast } from "react-toastify";
import { firestore } from "../configAuth";
import { addDoc, collection, onSnapshot } from "firebase/firestore";

const dbRef = collection(firestore, "posts");

const date = new Date();

const hour = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();
const day = date.getDate();

const currentTime =
  "Time: " +
  hour +
  ":" +
  minutes +
  ":" +
  seconds +
  " Date: " +
  " " +
  date.getDate() +
  "/" +
  date.getMonth() +
  "/" +
  date.getFullYear();

//create post to firestore
const createPost = (status) => {
  const statusItem = {
    status: status,
    time: currentTime,
  };
  addDoc(dbRef, statusItem)
    .then((res) => {
      toast.success("post has been successful.");
    })
    .catch((err) => {
      toast.success("failed to post.");
    });
};

const getAllPost = (setAllPost) => {
  try {
    onSnapshot(dbRef, (res) => {
     
      setAllPost(
        res.docs.map((e) => {
          return { ...e.data(), id: e.id };
        })
      );
      
    });
  } catch (error) {
    console.log(error);
  }
};


export { createPost, getAllPost };
