import React, {createContext, useState} from "react";
import {useHistory, Link} from 'react-router-dom';


export const AuthContext = createContext(null);

function AuthContextProvider({children}) {
    const [isAuth, toggleIsAuth] = useState(false);
    let history = useHistory();


    function login(e) {
        e.preventDefault();
        history.push("/profiel");
        console.log("Gebruiker is ingelogd");
        toggleIsAuth(!isAuth);
    }

    function logout(e) {
        e.preventDefault();
        console.log("de gebruiker is uitgelogd");
        toggleIsAuth(!isAuth);
        history.push('/');
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