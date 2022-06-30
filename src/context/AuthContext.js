import React, {createContext, useEffect, useState} from "react";
import {useNavigate} from 'react-router-dom';
import jwtDecode from "jwt-decode";
import axios from "axios";
import nav from "../components/pageItems/header/nav/Nav";
import isTokenValid from "../helpers/isTokenValid";

export const AuthContext = createContext(null);

function AuthContextProvider({children}) {
    const [auth, toggleAuth] = useState({
        isAuth: false,
        user: null,
        status: 'pending',
    });
    let navigate = useNavigate();


    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token && isTokenValid(token)) {
            const decodedToken = jwtDecode(token);
            getData(decodedToken.sub, token);
        } else {
            toggleAuth({
                isAuth: false,
                user: null,
                status: 'done',
            });
        }
    }, [])


    function login(token) {
        const decodedToken = jwtDecode(token);
        localStorage.setItem('token', token);
        getData(decodedToken.sub, token, "/profiel");
    }

    function logout(e) {
        localStorage.clear();
        e.preventDefault();
        console.log("de gebruiker is uitgelogd");
        toggleAuth({
            isAuth: false,
            user: null,
            status: 'done',
        });
        navigate('/');
    }

    async function getData(id, token, redirectUrl) {
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
            toggleAuth({
                ...auth,
                isAuth: true,
                user: {
                    username: response.data.username,
                },
                status: 'done',
            });
            if (redirectUrl) {
                navigate(redirectUrl);
            }

        } catch (error) {
            console.error('There was an error!', error);
            localStorage.clear();
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
            {auth.status === 'done' ? children : <p>Loading...</p>}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;