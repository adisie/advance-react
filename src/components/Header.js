

import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import user_profile_image from '../assets/images/mili-3.jpg';

import { ThemeContext } from '../contexts/ThemeContext';
import { AuthContext } from '../contexts/AuthContext';

class Heeader extends Component {
    activeLinkStyle = ({isActive}) => {
        return {
            fontWeight: isActive ? "bold" : "normal",
            textDecoration: isActive ? "underline" : "none",
        }
    }
    render() { 
        return (
            <AuthContext.Consumer>
                {(authContext)=>{
                    return (
                        <ThemeContext.Consumer>
                {(themeContext)=>{
                    const {isLightTheme,light,dark,themeToggler} = themeContext;
                    const theme = isLightTheme ? light : dark;
                    const {isLoggedIn,username,logInOut} = authContext;
                    return (
                        <header style={{background: theme.hbg,color: theme.htc,transition: "1s"}}>
                            <NavLink className="site-logo" to='/' style={{color: theme.htc,transition: "1s"}}>highland</NavLink>
                            <nav className="navigation">
                                <ul>
                                    <li>
                                        <NavLink className="link" to='/' style={{color: theme.htc,transition: "1s"}}>Home</NavLink>
                                    </li>
                                    <>
                                    {
                                        isLoggedIn 
                                        ?
                                        (
                                            <>
                                            <li>
                                                <NavLink className="link" to='skills' style={{color: theme.htc,transition: "1s"}}>Skills</NavLink>
                                            </li>
                                            <li>
                                                <NavLink className="link" to='experience' style={{color: theme.htc,transition: "1s"}}>Experience</NavLink>
                                            </li><li>
                                                <NavLink className="link logout-link" style={{color: theme.htc,transition: "1s",borderColor: theme.htc}} onClick={logInOut}>Logout</NavLink>
                                            </li>
                                            <li>
                                                <NavLink className="link username-link" style={{color: theme.htc,transition: "1s"}}>{username}</NavLink>
                                            </li>
                                            </>
                                        )
                                        :
                                        (
                                            <>
                                            <li>
                                                <NavLink className="link" to='login' style={{color: theme.htc,transition: "1s"}}>Login</NavLink>
                                            </li>
                                            <li>
                                                <NavLink className="link" to='signup' style={{color: theme.htc,transition: "1s"}}>Signup</NavLink>
                                            </li>
                                            </>
                                        )
                                    }
                                    </>
                                    
                                    
                                </ul>
                                <img src={user_profile_image} alt="user-profile-img" className="user-profile-img" onClick={themeToggler} />
                                
                            </nav>
                        </header>
                    )
                }}
            </ThemeContext.Consumer>
                    )
                }}
            </AuthContext.Consumer>
        );
    }
}
 
export default Heeader;