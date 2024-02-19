import { FaHeart } from "react-icons/fa";
import { likeOrNot, likePost } from "../../../API/Firestore";
import { useEffect, useMemo, useState } from "react";

export default function LikeButton({ userId, postId, post }) {
  const [liked, setLiked] = useState(false);

  function handleLike() {
    likePost(userId, postId, liked, setLiked);
  }

  useEffect(() => {
    likeOrNot(userId, postId, setLiked);
  }, [userId, postId]);

  return (
    <div
      className={
        liked
          ? "py-1 px-1  gap-1 items-center text-md  cursor-pointer font-bold  rounded-md z-10"
          : "py-1 px-1   gap-1 items-center text-md cursor-pointer font-bol rounded-md z-10"
      }
      onClick={handleLike}
    >
      <p>{post.likeCount} people likes this post</p>
      <div
        className={
          liked
            ? "flex items-center text-sky-400 justify-center gap-2"
            : "flex items-center  justify-center gap-2"
        }
      >
        <FaHeart />
        <p>Like</p>
      </div>
    </div>
  );
}
