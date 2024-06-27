import { useState, useEffect, useContext } from "react";
import userContext from "../../context/userContext";

import { useNavigate } from "react-router-dom";
import { UserContext } from "../../Provider/UserProvider";

function LoginPage() {
  const contextData = useContext(UserContext);
  const { nameHandler, tokenHandler } = contextData;

  const navigate = useNavigate();

  console.log("contextData", contextData, "contextData");

  const [loginState, setLoginState] = useState({
    email: "",
    password: "",
  });

  function submitForm() {
    async function callAPI() {
      /* const url = "https://academics.newtonschool.co/api/v1/user/login"
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("projectId", "8nbih316dv01");

      const raw = JSON.stringify({
          email: loginState.email,
          password: loginState.password,
          appType: "music",
      });
      const requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow",
      }
      const response = await fetch(url, requestOptions)
      const data = await response.json();
      const token = data?.token;
      const name = data?.data.user.name;

      tokenHandler(token);
      nameHandler(name);

      console.log("data login", data);
  }
  callAPI();
  navigate("/") */

      const url = "https://academics.newtonschool.co/api/v1/user/login";
      const myHeaders = new Headers();
      myHeaders.append("projectID", "z5civ6ptecws");
      myHeaders.append("Content-Type", "application/json");

      const raw = JSON.stringify({
        email: "vikas@gmail.com",
        password: "1234567890",
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
      console.log("tokenHandler", data);
        const token = data?.token;
      const name = data?.data.name;

      tokenHandler(token);
      nameHandler(name);

      console.log("data login", data);
    }
    callAPI();
    navigate("/");
  }

  function formHandler(e, key) {
    const val = e.target.value;

    setLoginState((old) => {
      return {
        ...old,
        [key]: val,
      };
    });
  }

  return (
    <>
    <div className="flex justify-center mt-28">
      
      <form
        className="flex flex-col justify-center border rounded p-4 gap-8"
        onSubmit={(e) => {
          e.preventDefault();
          submitForm();
          console.log("get the state", loginState);
        }}
      >
        <div className="flex justify-center">
          <h1 className="text-2xl font-bold">Sign Up</h1>
        </div>
        
        <div>
        <label>Name :</label>
        <input type="text" placeholder="Enter name.." className="p-1 ml-1 bg-slate-100 text-black rounded" onChange={(e) => formHandler(e, "name")} />
        </div>
        <div>
        <label>Email :</label>
        <input type="email" placeholder="Enter email.." className="p-1 ml-1 bg-slate-100 text-black rounded" onChange={(e) => formHandler(e, "email")} />
        </div>
        <div>
        <label> Password :</label>
        <input type="password" placeholder="Enter pass..." className="p-1 ml-1 bg-slate-100 text-black rounded" onChange={(e) => formHandler(e, "password")} />
        </div>
        <button type="submit" className="bg-blue-600 p-1 rounded-2xl">Sign Up</button>
      </form>
      </div>
    </>
  );
}
export default LoginPage;
