import { Navigate,Outlet } from "react-router-dom";
import { useContext } from "react";

import {AuthContext} from '../contexts/AuthContext';

const PrivateRoutes = () => {
    const {auth} = useContext(AuthContext);
    return ( 
        auth.isLoggedIn ? <Outlet /> : <Navigate to='login' />
     );
}
 
export default PrivateRoutes;