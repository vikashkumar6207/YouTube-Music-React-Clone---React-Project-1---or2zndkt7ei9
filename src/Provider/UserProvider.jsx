import React, { createContext, useState } from "react";

export const UserContext = React.createContext({
  getName: "",
  getToken: "",
  nameHandler: () => {},
  tokenHandler: () => {},
  emailHandler: () => {},
  setSearchText: null,
});

const UserProvider = (props) => {
  const [getToken, setToken] = useState(sessionStorage.getItem("token"));
  const [getName, setName] = useState(sessionStorage.getItem("name"));
  const [getEmail, setEmail] = useState(sessionStorage.getItem("email"));

  const [searchText, setSearchText] = useState('');





  console.log('USER PROVIDER LOGS',getName, getToken,getEmail );

  const { children } = props;

  function tokenHandler(token) {
   
        setToken(token);
        sessionStorage.setItem("token", token);
  }
  function nameHandler(name) {
    
        setName(name);
        sessionStorage.setItem("name", name);
  }
  function emailHandler(email){
    setEmail(email);
    sessionStorage.setItem("email",email);
  }

 

  const valueObj = {
    getName,
    getToken,
    tokenHandler,
    nameHandler,
    emailHandler,
    searchText,
    setSearchText,
  };

  return (
    <>
      <UserContext.Provider value={valueObj}>{children}</UserContext.Provider>
    </>
  );
};

export default UserProvider;
