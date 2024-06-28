// import { useContext, useEffect, useState } from "react";
// import { UserContext } from "../../Provider/UserProvider";

// const Login = () => {

//   const ContextData = useContext(UserContext);
//     const {tokenHandler, nameHandler, emailHandler} = ContextData;

//   const [loginstate, setLoginstate] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });

//   function submitForm() {
//     async function callAPI() {
//       const url = "https://academics.newtonschool.co/api/v1/user/login";
//       const myHeaders = new Headers();
//       myHeaders.append("projectID", "z5civ6ptecws");
//       myHeaders.append("Content-Type", "application/json");

//       const raw = JSON.stringify({
//         email: loginstate.email,
//         password: loginstate.password,
//         appType: "music",
//       });

//       const requestOptions = {
//         method: "POST",
//         headers: myHeaders,
//         body: raw,
//         redirect: "follow",
//       };

//       const response = await fetch(url, requestOptions);
//       const data = await response.json();
//       console.log(data, "LOGIN DATA");
//       const token = data?.token;
//       const name = data?.data?.user?.name;
//       const email = data?.data?.user?.email;
//       tokenHandler(token);
//       nameHandler(name);
//       emailHandler(email);
//       setIsLoggedIn(true);
//     }
//     callAPI();
//   }

//   function formHandler(e, key) {
//     const val = e.target.value;

//     setLoginstate((old) => {
//       return {
//         ...old,
//         [key]: val,
//       };
//     });
//   }

//   return (

//        <div className="flex justify-center mt-28">
//        <form
//          onSubmit={(e) => {
//            e.preventDefault();
//            submitForm();
//            loggedInstatus(true);
//            console.log("preventDefault", loginstate);

//          }}
//          className="flex flex-col justify-center border rounded p-4 gap-8"
//        >
//          <div className="flex justify-center">
//            <h1 className="text-2xl font-bold">Sign In Form</h1>
//          </div>
//          <div>
//            <label>Name :</label>
//            <input
//              type="text"
//              placeholder="Enter name.."
//              className="p-1 ml-1 bg-slate-100 text-black rounded"
//              onChange={(e) => formHandler(e, "name")}
//            />
//          </div>
//          <div>
//            <label>Email :</label>
//            <input
//              type="email"
//              placeholder="Enter email.."
//              className="p-1 ml-1 bg-slate-100 text-black rounded"
//              onChange={(e) => formHandler(e, "email")}
//            />
//          </div>
//          <div>
//            <label> Password :</label>
//            <input
//              type="password"
//              placeholder="Enter pass..."
//              className="p-1 ml-1 bg-slate-100 text-black rounded"
//              onChange={(e) => formHandler(e, "password")}
//            />
//          </div>
//          <button type="submit" className="bg-blue-600 p-1 rounded-2xl" >
//            Sign Up
//          </button>
//        </form>
//      </div>
//   );
// };

// export default Login;

// ---------------

import React, { useContext, useState } from "react";
import { UserContext } from "../../Provider/UserProvider";
import Login from "../../components/Signup/Signup";

const Signup = () => {
  const ContextData = useContext(UserContext);
  const {tokenHandler, nameHandler, emailHandler} = ContextData;

  const [userRegster, setUserRegster] = useState(false);

  const [isLogin, setIsLogIn] = useState({
    name: "",
    email: "",
    password: "",
  });

  function newRegiterApi() {
    async function fetchAPI() {
      const url = "https://academics.newtonschool.co/api/v1/user/signup";
      const myHeaders = new Headers();
      myHeaders.append("projectID", "z5civ6ptecws");
      myHeaders.append("Content-Type", "application/json");

      const raw = JSON.stringify({
        name: isLogin.name,
        email: isLogin.email,
        password: isLogin.password,
        appType: "music",
      });

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      const response = await fetch(url, requestOptions);
      const data = await response.json();
      console.log("USER DATA", data);
      const token = data?.token;
      const name = data?.data?.user?.name;
      const email = data?.data?.user?.email;
      tokenHandler(token);
      nameHandler(name);
      emailHandler(email);
      setUserRegster(true);
    }
    fetchAPI();
  }

  function inputHandler(e, key) {
    const val = e.target.value;

    setIsLogIn((old) => {
      return {
        ...old,
        [key]: val,
      };
    });
  }

  return (
    <> 
    { userRegster ? (< Login />) : (
      <div className="flex justify-center mt-28">
        <form
          className="flex flex-col justify-center border rounded p-4 gap-8"
          onSubmit={(e)=>{
            e.preventDefault();
            newRegiterApi();
            console.log("newRegiterApi User ", isLogin);
          }}
        >
          <div className="flex justify-center">
            <h1 className="text-2xl font-bold">Sign Up Form</h1>
          </div>
          <div>
            <label>Name :</label>
            <input
              type="text"
              placeholder="Enter name.."
              className="p-1 ml-1 bg-slate-100 text-black rounded"
              onChange={(e)=> inputHandler(e, "name")}
            />
          </div>
          <div>
            <label>Email :</label>
            <input
              type="email"
              placeholder="Enter email.."
              className="p-1 ml-1 bg-slate-100 text-black rounded"
              onChange={(e)=> inputHandler(e, "email")}
            />
          </div>
          <div>
            <label> Password :</label>
            <input
              type="password"
              placeholder="Enter pass..."
              className="p-1 ml-1 bg-slate-100 text-black rounded"
              onChange={(e)=> inputHandler(e, "password")}
            />
          </div>
          <button type="submit" className="bg-blue-600 p-1 rounded-2xl">
            Sign Up
          </button>
        </form>
      </div>
        )}
    </>
  );
};

export default Signup;
