import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const Signup = () => {
  const [err, setError] = useState();
  const [success, setSuccess] = useState();

  const [userStatus, setUserStatus] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  async function signupFun() {
    const url = "https://academics.newtonschool.co/api/v1/user/signup";
    const myHeaders = new Headers();
    myHeaders.append("projectID", "z5civ6ptecws");
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      name: userStatus.name,
      email: userStatus.email,
      password: userStatus.password,
      appType: "music",
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    try {
      const response = await fetch(url, requestOptions);

      const data = await response.json();
      console.log("NEW USER DATA", data);
      console.log("USER DATA", data.message);
      setError(data.message);
      setSuccess("Register successful..");
      if (response.ok) {
        console.log("response ok");
        setTimeout(() => {
          navigate("/login");
        }, 3000);
      }
    } catch (error) {
      console.log(error);
    }
  }
  function formHandler(e, key) {
    const val = e.target.value;

    setUserStatus((old) => {
      return {
        ...old,
        [key]: val,
      };
    });
  }

  return (
    <>
    <div className="mt-32">
      <div className="flex  justify-center rounded p-4 gap-8">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            signupFun();
          }}
          className=" flex flex-col rounded border gap-5 p-5"
        >
          <div className="flex justify-center">
            <h1 className="text-2xl font-bold">Sign Up Form</h1>
          </div>
          {err ? (
            <h1 className="text-red-500">{err}</h1>
          ) : (
            <h1 className="text-green-500">{success}</h1>
          )}
          <div>
            <label>Name :</label>
            <input
              type="text"
              placeholder="Enter name.."
              className="p-1 ml-1 bg-slate-100 text-black rounded"
              onChange={(e) => formHandler(e, "name")}
            />
          </div>
          <div>
            <label>Email :</label>
            <input
              type="email"
              placeholder="Enter email.."
              className="p-1 ml-1 bg-slate-100 text-black rounded"
              onChange={(e) => formHandler(e, "email")}
            />
          </div>
          <div>
            <label> Password :</label>
            <input
              type="password"
              placeholder="Enter pass..."
              className="p-1 ml-1 bg-slate-100 text-black rounded"
              onChange={(e) => formHandler(e, "password")}
            />
          </div>
          <button type="submit" className="bg-blue-600 p-1 rounded-2xl">
            Sign In
          </button>
          <p>
            Already have an account ?
            <span onClick={() => navigate("/login")} className="text-blue-600">
              Sign in
            </span>
          </p>
        </form>
      </div>
      </div>
    </>
  );
};
export default Signup;
