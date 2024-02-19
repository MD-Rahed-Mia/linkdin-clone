import { toast } from "react-toastify";
import { auth, firestore } from "../configAuth";
import {
  addDoc,
  arrayRemove,
  arrayUnion,
  collection,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  query,
  serverTimestamp,
  updateDoc,
  where,
} from "firebase/firestore";
import uuid from "react-uuid";

const dbRef = collection(firestore, "posts");
const userRef = collection(firestore, "users");

const createUsers = async (name, email) => {
  const user = auth.currentUser;
  addDoc(userRef, {
    name: name,
    email: email,
    userId: user.uid,
  });
};

const date = new Date();
//getting current time
const currentTime =
  date.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  }) +
  " " +
  date.getDate() +
  "/" +
  (date.getMonth() + 1) +
  "/" +
  date.getFullYear();

//create post to firestore
const createPost = async (status) => {
  const currentUserRef = collection(firestore, "users");

  const q = query(currentUserRef, where("email", "==", auth.currentUser.email));
  const docSnap = await getDocs(q);

  let profileImg = "";
  docSnap.forEach((item) => {
    profileImg = item.data().profileImageUrl;
  });

  const user = auth.currentUser;
  const statusItem = {
    status: status,
    time: currentTime,
    userEmail: user.email,
    postId: uuid(),
    userName: user.displayName,
    likeCount: 0,
    likers: [],
    commentItem: [],
    profileImg: profileImg,
  };

  addDoc(dbRef, statusItem);
};

//getting all post from firebase
const getAllPost = (setAllPost, setLoading) => {
  try {
    onSnapshot(dbRef, (res) => {
      setLoading(false);
      setAllPost(
        res.docs.map((e) => {
          setLoading(false);
          return { ...e.data(), id: e.id };
        })
      );
    });
  } catch (error) {
    console.log(error);
  }
};

//get signleUsers post

const getSingleUserPost = async (setAllPost, setLoading) => {
  try {
    const collectionRef = collection(firestore, "posts");
    const q = query(
      collectionRef,
      where("userEmail", "==", localStorage.getItem("userEmail"))
    );

    const docSnapShot = await getDocs(q);

    setLoading(false);

    const filterItem = docSnapShot.docs.map((item) => {
      return { ...item.data(), id: item.id };
    });

    setAllPost(filterItem);
  } catch (error) {
    console.log(error);
  }
};

//update users data to firestore
const updateProfileData = async (userId, payload) => {
  const queryDocId = query(userRef, where("userId", "==", userId));
  const queryAway = await getDocs(queryDocId);

  let docId = "";

  if (!queryAway.empty) {
    const documentId = queryAway.docs[0].id;
    docId = documentId;
  } else {
    console.log("document not match.");
  }

  const updateUserRef = doc(userRef, docId);
  updateDoc(updateUserRef, payload)
    .then((res) => {
      toast.success("update succesful.");
    })
    .catch((error) => {
      console.log(error.message);
    });
};

//get current user based on user
function getCurrentUser(setCurrentUser) {
  const currentId = localStorage.getItem("userEmail");
  onSnapshot(userRef, (res) => {
    setCurrentUser(
      res.docs
        .map((response) => {
          return { ...response.data() };
        })
        .filter((item) => {
          let data;
          if (item.email == currentId) {
            data = item;
            return data;
          }
        })[0]
    );
  });
}

//like post
async function likePost(userId, postId, liked) {
  const postRef = doc(firestore, "posts", postId);
  const eventDoc = await getDoc(postRef);
  const currentLike = eventDoc.data().likeCount;
  try {
    if (liked) {
      updateDoc(postRef, {
        likeCount: currentLike - 1,
        likers: arrayRemove(userId),
      }).then((res) => {});
    } else if (!liked) {
      updateDoc(postRef, {
        likeCount: currentLike + 1,
        likers: arrayUnion(userId),
      }).then((res) => {
        const notice = `${auth.currentUser.displayName} likes your post.`;
        generateNotification(userId, postId, notice);
      });
    }
  } catch (error) {
    toast.warn(error.message);
  }
}

//check is user like the post
const likeOrNot = async (userId, postId, setLiked) => {
  const postRef = doc(firestore, "posts", postId);
  const docSnap = await getDoc(postRef);

  if (docSnap.exists()) {
    const userLiked = docSnap.data().likers.some((user) => user == userId);
    setLiked(userLiked);
  }
};

//crate comment on post
const handleCommentOnPost = async (postId, userId, comment, currentUser) => {
  try {
    let date = new Date().toLocaleString();
    console.log(postId, userId, comment, date);
    const postRef = doc(firestore, "posts", postId);
    updateDoc(postRef, {
      commentItem: arrayUnion({
        userId,
        postId,
        comment,
        date,
        name: currentUser.name,
      }),
    });
  } catch (error) {
    toast.warn("failed to comment here.");
  }
};

//get comment user on this
const getCommentUser = async (userId) => {
  const ref = collection(firestore, "users");
  const queryItem = query(ref, where("userId", "==", userId));
  const querySnapshot = await getDocs(queryItem);
  const user = querySnapshot.docs.map((res) => res.data());
  console.log(user);
};

const getUserPost = async (setSinglePost) => {
  const signleUserRef = collection(firestore, "posts");
  const q = query(
    signleUserRef,
    where("userEmail", "==", auth.currentUser.email)
  );

  const querySnapshot = await getDocs(q);

  setSinglePost(
    querySnapshot.docs.map((item) => {
      return item.data();
    })
  );
};

const deletePost = () => {
  console.log("post is delete");
};

const generateNotification = async (userId, postId, notice) => {
  let userProfileImg = "";
  const userRef = collection(firestore, "users");
  const q = query(userRef, where("userId", "==", userId));
  const docSnapUser = await getDocs(q);
  docSnapUser.forEach((item) => {
    userProfileImg = item.data().profileImageUrl;
  });

  const notificationRef = collection(firestore, "notification");

  const docRef = await addDoc(notificationRef, {
    notice,
    userId,
    postId,
    timeStamp: serverTimestamp(),
    userProfileImg: userProfileImg,
  });
};

const getNotification = async (setNotification, setIsLoading) => {
  const noticeRef = collection(firestore, "notification");

  const docSnapshot = await getDocs(noticeRef);
  setNotification(
    docSnapshot.docs.map((doc) => {
      setIsLoading(false);
      const data = doc.data();
      return data;
    })
  );
};

export {
  createPost,
  getAllPost,
  getSingleUserPost,
  createUsers,
  updateProfileData,
  getCurrentUser,
  likePost,
  likeOrNot,
  handleCommentOnPost,
  getCommentUser,
  deletePost,
  getUserPost,
  getNotification,
};
