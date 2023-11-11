
import { NavLink } from "react-router-dom";
import { useReducer } from "react";

// contexts
import { ThemeContext } from "../contexts/ThemeContext";

import profile_img from '../assets/images/mili-3.jpg';

const Header = () => {
    const {theme} = useReducer(ThemeContext);
    console.log(theme);
    return ( 
        <header>
            <NavLink className="site-logo" to='/'>highland</NavLink>
            <nav className="navigation">
                <ul>
                    <li>
                        <NavLink className="link" to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink className="link" to="about">About</NavLink>
                    </li>
                    <li>
                        <NavLink className="link" to="contact">Contact</NavLink>
                    </li>
                </ul>
            </nav>
            <div className="user-controll-container">
                <button className="theme-toggler">theme</button>
                {
                    true
                    ?
                    <div className="user-control">
                        <button>logout</button>
                        <span>username</span>
                        <img src={profile_img} alt="user-profile" className="user-profile" />
                    </div>
                    :
                    <div className="user-control">
                        <NavLink to='login' className="user-controll-link">Login</NavLink>
                        <NavLink to='signup' className="user-controll-link">Sign up</NavLink>
                    </div>
                }
            </div>
        </header>
     );
}
 
export default Header;