import React, { useContext, useEffect, useState } from "react";
import { createContext } from "react";



const AuthContext = createContext();

export const useAuth = () => (
    useContext(AuthContext)
);

const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState({});
    const [userLoggedIn, setUserLoggedIn] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        console.log("auth useeffect ran");
        updateUser();
        console.log("end of effect");
        
    }, []);

const updateUser = async () => {
    const getUserEmail = await cookieStore.get("userEmail");
    const getUserId = await cookieStore.get("userId");
    if (getUserEmail && getUserId) {
        setCurrentUser({ email: getUserEmail.value, id: getUserId.value });
        setUserLoggedIn(true);
    }
    setIsLoading(false);
};

    const value  = {
        currentUser,
        userLoggedIn,
        isLoading,
    }
    

  return (
        <AuthContext.Provider value={value}>
            {!isLoading && children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;