
import { NavLink } from "react-router-dom";
import { useContext } from "react";

//icons
import {IoIosMoon} from 'react-icons/io';
import {BsFillSunFill} from 'react-icons/bs';

// contexts
import { ThemeContext } from "../contexts/ThemeContext";
import { AuthContext } from "../contexts/AuthContext";

import profile_img from '../assets/images/mili-3.jpg';

const Header = () => {
    const {theme,themeDispatcher} = useContext(ThemeContext);
    const themeColor = theme.isLightTheme ? theme.light : theme.dark;
    const {auth,authDispatcher} = useContext(AuthContext);
    return ( 
        <header style={{background: themeColor.hbg,color: themeColor.htc,transition: "1s"}}>
            <NavLink className="site-logo" to='/' style={{color: themeColor.htc,transition: "1s"}}>highland</NavLink>
            <nav className="navigation">
                <ul>
                    <li>
                        <NavLink className="link" to="/" style={{color: themeColor.htc,transition: "1s"}}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink className="link" to="about" style={{color: themeColor.htc,transition: "1s"}}>About</NavLink>
                    </li>
                    <li>
                        <NavLink className="link" to="contact" style={{color: themeColor.htc,transition: "1s"}}>Contact</NavLink>
                    </li>
                </ul>
            </nav>
            <div className="user-controll-container">
                <button className="theme-toggler" style={{color: themeColor.htc}} onClick={()=>themeDispatcher({type: 'TOGGLE_THEME'})}>
                    {theme.isLightTheme ? <IoIosMoon /> : <BsFillSunFill />}
                </button>
                {
                    auth.isLoggedIn
                    ?
                    <div className="user-control">
                        <button style={{borderColor: themeColor.htc,color: themeColor.htc}}
                        onClick={()=>authDispatcher({type: 'LOG_OUT'})}>logout</button>
                        <span style={{color: themeColor.htc,transition: "1s"}}>{auth.username}</span>
                        <img src={profile_img} alt="user-profile" className="user-profile" />
                    </div>
                    :
                    <div className="user-control">
                        <NavLink to='login' className="user-controll-link" style={{borderColor: themeColor.htc,color: themeColor.htc}}>Login</NavLink>
                        <NavLink to='signup' className="user-controll-link" style={{borderColor: themeColor.htc,color: themeColor.htc}}>Sign up</NavLink>
                    </div>
                }
            </div>
        </header>
     );
}
 
export default Header;