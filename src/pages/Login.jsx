import React, { useEffect, useState } from "react";
import { loginApi } from "../API/LoginAPI";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../configAuth";
import { useNavigate } from "react-router-dom";

export default function Login() {
  //navigator
  const navigator = useNavigate();

  //store credential
  const [credential, setCredential] = useState({});

  //trigger sign in function
  const login = async (event) => {
    event.preventDefault();
    try {
      const res = await loginApi(credential.email, credential.password);
      console.log(res);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    onAuthStateChanged(auth, (res) => {
      if (res?.accessToken != null) {
        navigator("/");
      } else {
      }
    });
  }, []);

  return (
    <div className="w-4/5 mx-auto min-h-screen flex items-center content-center p-20">
      <form action="" className="">
        <h1 className="text-6xl font-thin text-orange-600">
          Welcome to your professional community
        </h1>
        <div className="mt-10">
          <label htmlFor="email" className="block text-sm my-2">
            Email or Phone
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="p-4 min-w-96 border border-cyan-950 rounded-sm hover:border-2"
            onChange={(event) =>
              setCredential({ ...credential, email: event.target.value })
            }
            required
            autoComplete="true"
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm my-2">
            Password
          </label>
          <input
            type="password"
            name="passwrod"
            id="password"
            className="p-4 min-w-96 border border-cyan-950 rounded-sm hover:border-2"
            onChange={(event) =>
              setCredential({ ...credential, password: event.target.value })
            }
            required
            autoComplete="true"
          />
        </div>
        <div>
          <a
            href="#"
            className="text-lg font-bold text-[color:var(--primary-color)]"
          >
            forget password
          </a>
        </div>
        <div className="">
          <button
            className="min-w-96 bg-[color:var(--primary-color)] text-white p-3 rounded-full mt-5 text-lg"
            type="submit"
            onClick={(event) => login(event)}
          >
            sing in
          </button>
        </div>
        <div>
          <button className="w-96 mt-10 capitalize text-lg font-semibold ">
            new to linkdin?{" "}
            <a href="/register" className="text-[color:var(--primary-color)]">
              Join Now
            </a>
          </button>
        </div>
      </form>
      <div>
        <img
          src="https://static.licdn.com/aero-v1/sc/h/dxf91zhqd2z6b0bwg85ktm5s4"
          alt="linkdin login img"
        />
      </div>
    </div>
  );
}
