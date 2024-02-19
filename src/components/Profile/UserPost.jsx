import React, { useMemo, useState } from "react";
import PostCard from "../common/PostCard";
import { getAllPost, getSingleUserPost } from "../../API/Firestore";
import uuid from "react-uuid";
import Loader from "../common/Loader";

export default function UserPost() {
  const [singleUserPost, setSingleUserPost] = useState([]);
  const [loading, setLoading] = useState(true);

  useMemo(() => {
    getSingleUserPost(setSingleUserPost, setLoading);
  }, []);

  return (
    <div>
      {singleUserPost.length == 0 ? (
        <Loader isLoading={loading} />
      ) : (
        singleUserPost.map((post) => {
          return <PostCard key={uuid()} post={post} userOwn={true} />;
        })
      )}
    </div>
  );
}
