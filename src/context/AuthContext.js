import React, {createContext, useState} from "react";
import {useNavigate} from 'react-router-dom';
import jwtDecode from "jwt-decode";
import axios from "axios";

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
        getData(decodedToken.sub, token)
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

    async function getData(id, token) {
        try {
            console.log(token);
            console.log(id);
            const response = await axios.get(`http://localhost:8080/users/${id}`, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                }
            });
            console.log(response.data);
        } catch (error) {
            console.error('There was an error!', error);
        }
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