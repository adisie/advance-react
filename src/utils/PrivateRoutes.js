import { Outlet,Navigate } from "react-router-dom";
import React, { Component } from 'react';
import { AuthContext } from "../contexts/AuthContext";

class PrivateRoutes extends Component {
    static contextType = AuthContext;
    render() {
        const {isLoggedIn} = this.context 
        return (
            <>
            {
               isLoggedIn
                ?
                <Outlet />
                :
                <Navigate to='login' />
            }
            </>
        );
    }
}
 
export default PrivateRoutes;