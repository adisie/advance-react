import { NavLink } from "react-router-dom";
import { useContext } from "react";

import { ThemeContext } from "../contexts/ThemeContext";

const Header = () => {
    const {isLightTheme,light,dark,themeSwitcher} = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;

    return ( 
        <header style={{background: theme.hbg,color: theme.hc,transition: "1s"}}>
            <NavLink className='site-logo' to='/' style={{color: theme.hc,transition: "1s"}}>blogs</NavLink>
            <nav className="navigation">
                <ul>
                    <li>
                        <NavLink className="link" to='/' style={{color: theme.hc,transition: "1s"}}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink className="link" to='blogs'style={{color: theme.hc,transition: "1s"}} >Blogs</NavLink>
                    </li>
                </ul>
                <button style={{borderColor: theme.hc,color: theme.hc,transition: "1s"}} onClick={themeSwitcher}>switch theme</button>
                <button style={{borderColor: theme.hc,color: theme.hc,transition: "1s"}}>login/out</button>
            </nav>
        </header>
     );
}
 
export default Header;