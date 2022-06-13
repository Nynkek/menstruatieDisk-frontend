import React, {useContext} from 'react';
import {Route, Redirect} from "react-router-dom";
import {AuthContext} from "../context/AuthContext";


function PrivateRoute({ children, ...rest }) {
    const { auth } = useContext(AuthContext);

    return (
        <Route {...rest} >
            {auth === true ? children : <Redirect to="/signin" />}
        </Route>
    );
}

export default PrivateRoute;