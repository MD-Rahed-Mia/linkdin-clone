import React, { useState } from "react";

export default function ModalComponent({
  isModalOn,
  setIsModalOn,
  handlePostStatus,
}) {
  //status
  const [status, setStatus] = useState("");

  //handle background click event
  const handleBackground = () => {
    if (status.length > 0) {
      return;
    } else {
      setIsModalOn(!isModalOn);
    }
  };

  //handle post propagtion
  function handleCardPropagation(event) {
    event.stopPropagation();
  }

  //handle send post
  async function handleSendPost() {
    try {
      await handlePostStatus(status);
      await setIsModalOn(!isModalOn);
    } catch (error) {
      console.log("failed to save post.");
    }
  }

  //if modal is on then render this
  if (isModalOn) {
    return (
      <div
        className="w-full absolute left-0 top-0 min-h-screen bg-slate-900 bg-opacity-30"
        onClick={() => handleBackground()}
      >
        <div
          className="post-block mt-52 w-2/4 mx-auto p-4 bg-white border shadow rounded-2xl "
          onClick={(event) => handleCardPropagation(event)}
        >
          <h1 className="text-2xl text-slate-800 font-bold">Create a post</h1>
          <textarea
            name="post"
            id="post"
            cols="30"
            rows="10"
            placeholder="What do you want to talk about?"
            className="w-full outline-none text-lg resize-none focus:bg-slate-100 p-3 rounded-lg"
            onChange={(e) => setStatus(e.target.value)}
          ></textarea>
          <hr />
          <button
            className="px-4 py-2 bg-[color:var(--primary-color)] text-white text-lg rounded-full mt-3 cursor-pointer "
            onClick={handleSendPost}
            disabled={status.length <= 0 ? true : false}
          >
            Post
          </button>
          <button
            className="px-4 py-2 border border-red-300 ml-5 hover:bg-slate-500 hover:text-white hover:border-slate-500 text-lg rounded-full mt-3 cursor-pointer"
            onClick={() => setIsModalOn(!isModalOn)}
          >
            Cancel
          </button>
        </div>
      </div>
    );
  } else {
    return false;
  }
}
