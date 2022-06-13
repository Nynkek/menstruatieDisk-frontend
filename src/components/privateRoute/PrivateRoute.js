import React, {useContext} from 'react';
import {Route, Navigate} from "react-router-dom";
import {AuthContext} from "../../context/AuthContext";


function PrivateRoute({ children, ...rest }) {
    const { auth } = useContext(AuthContext);

    return (
        <Route {...rest} >
            {auth === true ? children : <Navigate to="/signin" />}
        </Route>
    );
}

export default PrivateRoute;