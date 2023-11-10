

import React, { Component } from 'react';
import {ThemeContext} from '../contexts/ThemeContext';
import { AuthContext } from '../contexts/AuthContext';
import { Navigate } from 'react-router-dom';


class Login extends Component { 
    render() { 
        return (
            <AuthContext.Consumer>
                {(authContext)=>{
                    return (
                        <ThemeContext.Consumer>
                            {(themeContext)=>{
                                const {isLightTheme,light,dark} = themeContext;
                                const theme = isLightTheme ? light : dark;
                                const {isLoggedIn,logInOut} = authContext;
                                return (
                                    <div className='content' style={{background: theme.cbg,color: theme.ctc,transition: "1s"}}>
                                        <>
                                        {
                                            isLoggedIn 
                                            ?
                                            <Navigate to='/skills' />
                                            :
                                            (
                                                <>
                                                    <h3 onClick={logInOut}>Login</h3>
                                                </>
                                            )
                                        }
                                        </>
                                    </div>
                                )
                            }}
            </ThemeContext.Consumer>
                    )
                }}
            </AuthContext.Consumer>
        );
    }
}
 
export default Login;