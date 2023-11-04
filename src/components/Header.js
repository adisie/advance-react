import {NavLink} from 'react-router-dom';

import ThemeSwitcher from './sub-components/ThemeSwitcher';
import ThemeStore from '../stores/ThemeStore';

const Header = () => {
    const {isLightTheme,light,dark} = ThemeStore();
    
    const theme = isLightTheme ? light : dark;

    //functions
    const activeLinkStyle = ({isActive}) => {
        return {
            fontWeight: isActive ? "bold" : "normal",
            fontStyle: isActive ? "italic" : "normal",
        }
    }
    return ( 
        <header style={{background: theme.hbg,transition: "1s"}}>
            <NavLink className="site-logo" style={{color: theme.hc}} to='/'><h3>blogs</h3></NavLink>
            <nav className="navigation">
                <ul>
                    <li>
                        <NavLink className="link" to='/' style={activeLinkStyle} ><span style={{color: theme.hc,transition: "1s"}}>Home</span></NavLink>
                    </li>
                    <li>
                        <NavLink className="link" to='blogs' style={activeLinkStyle}><span style={{color: theme.hc,transition: "1s"}}>Blogs</span></NavLink>
                    </li>
                    <li>
                        <NavLink className="link" to='about' style={activeLinkStyle}><span style={{color: theme.hc,transition: "1s"}}>About</span></NavLink>
                    </li>
                </ul>
                <ThemeSwitcher />
            </nav>
        </header>
     );
}
 
export default Header;