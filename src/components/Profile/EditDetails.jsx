import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { auth, firestore } from "../../configAuth";
import Loader from "../common/Loader";
import { updateProfileData } from "../../API/Firestore";

export default function EditDetails() {
  const userRef = collection(firestore, "users");
  const [isLoading, setIsLoading] = useState(true);
  const [currUser, setCurrUser] = useState();
  const [formData, setFormData] = useState({});

  const handleInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData((values) => ({ ...values, [name]: value }));
  };

  useEffect(() => {
    const currentUserId = auth.currentUser.uid;
    (async () => {
      const response = await getDocs(userRef);
      const data = response.docs.map((users) => users.data());
      const filterUser = data.filter((item) => {
        return item.userId == currentUserId;
      });
      // setCurrUser(user);
      setCurrUser(filterUser);
      setIsLoading(false);
    })();
  }, []);

  function handleSaveDetails(event) {
    event.preventDefault();

    updateProfileData(currUser[0].userId, formData);
  }

  return (
    <>
      {isLoading ? (
        <Loader isLoading={isLoading} />
      ) : (
        <div>
          <h1>Edit profile information</h1>
          <form action="">
            <div>
              <label htmlFor="name" className="block">
                Name
              </label>
              <input
                type="text"
                disabled
                className="px-2 py-1 border shadow-sm drop-shadow block my-1 w-full"
                placeholder={currUser[0].name}
                onChange={handleInput}
                name="name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block">
                email
              </label>
              <input
                type="email"
                disabled
                className="px-2 py-1 border shadow-sm drop-shadow block my-1 w-full"
                placeholder={currUser[0].email}
                onChange={handleInput}
                name="email"
              />
            </div>

            <div>
              <label htmlFor="education">Education</label>
              <input
                type="text"
                className="px-2 py-1 border shadow-sm drop-shadow block my-1 w-full"
                onChange={handleInput}
                name="education"
                placeholder={currUser[0].education}
              />
            </div>
            <div>
              <label htmlFor="company">Company</label>
              <input
                type="text"
                className="px-2 py-1 border shadow-sm drop-shadow block my-1 w-full"
                onChange={handleInput}
                name="company"
                placeholder={currUser[0].company}
              />
            </div>
            <div>
              <label htmlFor="skills">Skills</label>
              <input
                name="skills"
                type="text"
                className="px-2 py-1 border shadow-sm drop-shadow block my-1 w-full"
                onChange={handleInput}
                placeholder={currUser[0].skills}
              />
            </div>
            <div>
              <label htmlFor="phone">Mobile Number</label>
              <input
                name="number"
                type="number"
                className="px-2 py-1 border shadow-sm drop-shadow block my-1 w-full"
                onChange={handleInput}
                placeholder={currUser[0].number}
              />
            </div>
            <div>
              <label htmlFor="bio">Your Bio</label>
              <input
                name="bio"
                type="text"
                className="px-2 py-1 border shadow-sm drop-shadow block my-1 w-full"
                onChange={handleInput}
                placeholder={currUser[0].bio}
              />
            </div>
            <div>
              <button
                type="submit"
                className="py-2 px-5 bg-[var(--primary-color)] text-white drop-shadow-md mt-3
             rounded-md cursor-pointer"
                onClick={handleSaveDetails}
              >
                save details
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
