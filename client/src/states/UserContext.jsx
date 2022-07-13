import React,{ createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = (props) =>{
    const [user,setUser] = useState("");
    const [token,setToken] = useState("");
    const [isLoggedIn,setIsLoggedIn] = useState(false);


    return (
        <UserContext.Provider value={
            { 
            "userValue": [user,setUser],
            "tokenValue": [token,setToken],
            "isLoggedinValue": [isLoggedIn,setIsLoggedIn] 
            }

            }>
            {props.children}
        </UserContext.Provider>
    )
}