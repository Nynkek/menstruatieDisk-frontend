import React, {createContext, useState} from "react";
import {useNavigate} from 'react-router-dom';

export const AuthContext = createContext(null);

function AuthContextProvider({children}) {
    const [isAuth, toggleIsAuth] = useState(false);
    let history = useNavigate();

    function login(e) {
        e.preventDefault();
        history("/profiel");
        console.log("Gebruiker is ingelogd");
        toggleIsAuth(!isAuth);
    }

    function logout(e) {
        e.preventDefault();
        console.log("de gebruiker is uitgelogd");
        toggleIsAuth(!isAuth);
        history('/');
    }

    return (
        <AuthContext.Provider value={
            {
                auth: isAuth,
                login: login,
                logout: logout,
            }
        }>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;