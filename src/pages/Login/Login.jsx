import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../Provider/UserProvider";
import { useNavigate } from "react-router-dom";
import Page404 from "../Page404";

const Login = () => {
  const navigate = useNavigate();
  const ContextData = useContext(UserContext);
  const { tokenHandler, nameHandler, emailHandler } = ContextData;

  const [success, setSuccess] = useState("");
  const [Error, setError] = useState();

  const [loginstate, setLoginstate] = useState({
    name: "",
    email: "",
    password: "",
  });

  async function submitForm() {
    const url = "https://academics.newtonschool.co/api/v1/user/login";
    const myHeaders = new Headers();
    myHeaders.append("projectID", "z5civ6ptecws");
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      email: loginstate.email,
      password: loginstate.password,
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
      console.log(data, "LOGIN DATA");
      // setErrorHandler(data.message);
      const token = data?.token;
      const name = data?.data?.user?.name;
      const email = data?.data?.user?.email;

      // setIsLoggedIn(true);

      if (token && name) {
        tokenHandler(token);
        nameHandler(name);
        emailHandler(email);

        setSuccess("Login successful...");
        setTimeout(() => {
          navigate("/");
        }, 3000);
      } else {
        setError(data.message || "Login faild!");
      }
    } catch (error) {
      setError(error);
    }
  }

  function formHandler(e, key) {
    const val = e.target.value;

    setLoginstate((old) => {
      return {
        ...old,
        [key]: val,
      };
    });
  }

  return (
    <>
     {Error ? <Page404  /> : 
      <div className="flex justify-center mt-28 bg-inherit">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            submitForm();
            //  loggedInstatus(true);
            console.log("preventDefault", loginstate);
          }}
          className="flex flex-col justify-center border rounded p-4 gap-8"
        >
          
          <div className="flex justify-center">
            <h1 className="text-2xl font-bold">Sign In Form</h1>
          </div>
          {Error ? (
            <h1 className="text-red-600">{Error}</h1>
          ) : (
            <h1 className="text-green-700">{success}</h1>
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
            Create new account ?{" "}
            <span
              className="text-blue-600"
              onClick={() => {
                navigate("/signup");
              }}
            >
              Sign up
            </span>
          </p>
        </form>
      </div>
      }
    </>
  );
};

export default Login;
