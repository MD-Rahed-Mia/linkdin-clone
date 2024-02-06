import React, { useState } from "react";
import { RegisterApi } from "../API/LoginAPI";

export default function Register() {
  const [credential, setCredential] = useState({});

  const registerAccount = (event) => {
    event.preventDefault();
    try {
      const res = RegisterApi(credential.email, credential.password);
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div className="w-full min-h-screen">
      <div className=" w-96 h-96 mt-10 bg-white mx-auto">
        <h1 className="text-center text-4xl">Register Now</h1>
        <form action="" className="">
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
            />
          </div>
          <div>
            <a
              href="#"
              className="text-lg bold text-[color:var(--primary-color)]"
            >
              forget password
            </a>
          </div>
          <div className="">
            <button
              className="min-w-96 bg-[color:var(--primary-color)] text-white p-3 rounded-full mt-5 text-lg"
              type="submit"
              onClick={(event) => registerAccount(event)}
            >
              Register Account
            </button>
          </div>
          <div>
            <button className="w-96 mt-10 capitalize text-lg font-semibold ">
              Already Have An Account?{" "}
              <a href="/login" className="text-[color:var(--primary-color)]">
                Log In
              </a>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
