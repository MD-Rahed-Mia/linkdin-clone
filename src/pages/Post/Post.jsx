import React, { useMemo, useState } from "react";
import Layout from "../../Layouts/Index";
import PostCard from "../../components/common/PostCard";
import { useParams } from "react-router-dom";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import { app, fireStorage } from "../../configAuth";

export default function Post() {
  const { postId } = useParams();

  const [post, setPost] = useState();

  async function getTargetPost() {
    const db = getFirestore(app);
    const postRef = doc(db, "posts", postId);
    const docSnap = await getDoc(postRef);
    setPost(docSnap.data());
  }

  useMemo(() => {
    getTargetPost();
  }, []);

  console.log(post);
  return <Layout>{post && <PostCard userOwn={false} post={post} />}</Layout>;
}
