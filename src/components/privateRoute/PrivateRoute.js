import React, {useContext} from 'react';
import {Navigate} from "react-router-dom";
import {AuthContext} from "../../context/AuthContext";


function PrivateRoute({ children }) {
    const { auth } = useContext(AuthContext);

    return (
            auth === true ? children : <Navigate to="/signin" />
    );
}

export default PrivateRoute;