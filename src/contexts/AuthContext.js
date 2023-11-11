import { useReducer,createContext } from "react";

import { AuthReducer } from "../reducers/AuthReducer";

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
    const [auth,authDispatcher] = useReducer(AuthReducer,{
        isLoggedIn: false,
        username: '',
    })
    return ( 
        <AuthContext.Provider value={{auth,authDispatcher}}>
            {props.children}
        </AuthContext.Provider>
     );
}
 
export default AuthContextProvider;