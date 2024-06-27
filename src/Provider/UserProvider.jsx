import React, { useEffect } from 'react'
import { useContext,useState } from 'react';

export const UserContext = React.createContext ({
    getToken: "",
    getName: "",
    nameHandler: () => {},
    tokenHandler: () => {},
    logout: () => {},
    searchText: null,
});

const UserProvider = (props) => {



    const [getName, setName] = useState('');
    const [getToken, setToken] = useState('');

    const [searchText, setSearchText] = useState(null);

    useEffect(()=>{
        setName(sessionStorage.getItem("name") || '');
        setToken(sessionStorage.getItem("token") || '');
    },[])

    console.log(getName, getToken, "USER PROVIDER LOGS");

    const {children} = props;

    function tokenHandler(token){
        setToken(token);
        sessionStorage.setItem("token", token);
    }
    function nameHandler(name){
        setName(name);
        sessionStorage.setItem("name", name);
    }

    function logout(){
        setName("");
        setToken("");
        sessionStorage.clear();
        location.reload();
    }
    const valueObj = {
        getName,
        getToken,
        tokenHandler,
        nameHandler,
        logout,
        searchText,
        setSearchText,
    };

    
    return (
        <>
            <UserContext.Provider value={valueObj}>{children}</UserContext.Provider>
        </>
    )
}

export default UserProvider