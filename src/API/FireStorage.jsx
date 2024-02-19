import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { auth, fireStorage } from "../configAuth";
import { updateProfileData } from "./Firestore";

const uploadProfileImage = (file) => {
  const storageRef = ref(fireStorage, `profileImage/${file.name}`);
  const uploadTask = uploadBytesResumable(storageRef, file);

  uploadTask.on(
    "state_changed",
    (snapshot) => {
      // You can use this callback to track the progress of the upload if needed
    },
    (error) => {
      console.error("Error uploading file:", error);
    },
    () => {
      console.log("Upload successful.");

      // Get the download URL after successful upload
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        console.log("File available at", downloadURL);
        // Update user profile data with the new downloadURL
        updateProfileData(auth.currentUser.uid, {
          profileImageUrl: downloadURL,
        });
      });
    }
  );
};

export { uploadProfileImage };
