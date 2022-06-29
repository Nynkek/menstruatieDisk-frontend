import React, {createContext, useState} from "react";
import {useNavigate} from 'react-router-dom';
import jwtDecode from "jwt-decode";

export const AuthContext = createContext(null);

function AuthContextProvider({children}) {
    const [auth, toggleAuth] = useState({
        isAuth: false,
        user: null,
    });
    let navigate = useNavigate();

    function login(token) {
        console.log(token);
        const decodedToken = jwtDecode(token);

        console.log("Gebruiker is ingelogd");
        console.log(decodedToken);

        localStorage.setItem('token', token);

        toggleAuth( {
            isAuth: true,
            user: {
                username: decodedToken.sub,
            }
        });
        navigate("/profiel");
    }

    function logout(e) {
        e.preventDefault();
        console.log("de gebruiker is uitgelogd");
        toggleAuth({
            isAuth: false,
            user: null,
        });
        navigate('/');
    }

    const contextData = {
        auth: auth.isAuth,
        user: auth.user,
        login: login,
        logout: logout,
    }

    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;