import React, { useContext, useEffect, useMemo, useState } from "react";
import { userContext } from "../../context/Context";
import { LuPencilLine } from "react-icons/lu";
import EditDetails from "./EditDetails";
import ProfileInfo from "./ProfileInfo";
import { getCurrentUser } from "../../API/Firestore";
import UserPost from "./UserPost";

export default function ProfileComponent() {
  const [isEdit, setIsEdit] = useState(false);



  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    getCurrentUser(setCurrentUser);
  }, []);

  return (
    <div>
      {currentUser && (
        <div className="mt-4 w-3/5 mx-auto relative p-4 ">
          <button
            className="absolute top-3 right-4 py-1 px-4 cursor-pointer rounded-lg text-lg bg-[var(--primary-color)] text-white flex items-center justify-center gap-2"
            onClick={() => setIsEdit(!isEdit)}
          >
            Edit <LuPencilLine />
          </button>

          {isEdit ? (
            <div>
              <EditDetails />
            </div>
          ) : (
            <>
              <div>
                <ProfileInfo user={{ currentUser }} />
              </div>
              <div>
                <UserPost />
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
