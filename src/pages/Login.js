import { useState,useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";

const Login = () => {
    const [username,setUsername] = useState('');
    const {auth,authDispatcher} = useContext(AuthContext);

    const usernameChangeHandler = e =>{
        setUsername(e.target.value);
    }

    const loginSubmitHandler = e => {
        e.preventDefault();
        authDispatcher({type: 'LOG_IN',username})
        setUsername('');
    }
    return ( 
        <>
        {
            auth.isLoggedIn 
            ?
            <Navigate to='/blogs' />
            :
            <div>
                <h3>Login</h3>
                <form onSubmit={loginSubmitHandler}>
                    <input type="text" name="username" required placeholder="enter username" onChange={usernameChangeHandler} value={username}/>
                    <button>Login</button>
                </form>
            </div>
        }
        </>
     );
}
 
export default Login;