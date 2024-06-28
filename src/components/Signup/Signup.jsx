// import React from "react";

// const Signup = () => {
 
//     function newRegiterApi() {
//     async function fetchAPI() {

//         const url = "https://academics.newtonschool.co/api/v1/user/signup";
//       const myHeaders = new Headers();
//       myHeaders.append("projectID", "z5civ6ptecws");
//       myHeaders.append("Content-Type", "application/json");

//       const raw = JSON.stringify({
//         name: "test122",
//         email: "test122@gmail.com",
//         password: "1234567890",
//         appType: "music",
//       });

//       const requestOptions = {
//         method: "POST",
//         headers: myHeaders,
//         body: raw,
//         redirect: "follow",
//       };

//      const response = await fetch(url, requestOptions)
//        const data = await response.json();
//        console.log('USER DATA',data);
//     }
//     fetchAPI();
//   }
//   return (
//     <>
//        <div className="flex justify-center mt-28">

//       <form className="flex flex-col justify-center border rounded p-4 gap-8"
//         onSubmit={newRegiterApi}
//       >
//         <div className="flex justify-center">
//           <h1 className="text-2xl font-bold">Sign Up Form</h1>
//         </div>
//         <div>
//           <label>Name :</label>
//           <input
//             type="text"
//             placeholder="Enter name.."
//             className="p-1 ml-1 bg-slate-100 text-black rounded"
           
//           />
//         </div>
//         <div>
//           <label>Email :</label>
//           <input
//             type="email"
//             placeholder="Enter email.."
//             className="p-1 ml-1 bg-slate-100 text-black rounded"
            
//           />
//         </div>
//         <div>
//           <label> Password :</label>
//           <input
//             type="password"
//             placeholder="Enter pass..."
//             className="p-1 ml-1 bg-slate-100 text-black rounded"
           
//           />
//         </div>
//         <button type="submit" className="bg-blue-600 p-1 rounded-2xl">
//           Sign Up
//         </button>
//       </form>
//     </div>
//     </>
//   )
// };

// export default Signup;


// -----------
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../Provider/UserProvider";
import { useNavigate } from "react-router-dom";


const Login = () => {

  const ContextData = useContext(UserContext);
    const {tokenHandler, nameHandler, emailHandler} = ContextData;
    
    const navigate = useNavigate();

  const [loginstate, setLoginstate] = useState({
    name: "",
    email: "",
    password: "",
  });


  function submitForm() {
    async function callAPI() {
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

      const response = await fetch(url, requestOptions);
      const data = await response.json();
      console.log(data, "LOGIN DATA");
      const token = data?.token;
      const name = data?.data?.user?.name;
      const email = data?.data?.user?.email;
      tokenHandler(token);
      nameHandler(name);
      emailHandler(email);
     
    }
    callAPI();
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
   
       <div className="flex justify-center mt-28">
       <form
         onSubmit={(e) => {
           e.preventDefault();
           submitForm();
           console.log("preventDefault", loginstate);
           navigate("/")
         }}
         className="flex flex-col justify-center border rounded p-4 gap-8"
       >
         <div className="flex justify-center">
           <h1 className="text-2xl font-bold">Sign In Form</h1>
         </div>
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
         <button type="submit" className="bg-blue-600 p-1 rounded-2xl" >
           Sign Up
         </button>
       </form>
     </div>
  );
};

export default Login;

