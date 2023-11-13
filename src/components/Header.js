import { useContext } from 'react'
import {NavLink} from 'react-router-dom'
import {HiMiniMoon} from 'react-icons/hi2'
import {BsFillSunFill} from 'react-icons/bs'

import { ThemeContext } from '../contexts/ThemeContext'

const Header = () => {
    const {theme,themeToggler} = useContext(ThemeContext)
    const themeColor = theme.isLightTheme ? theme.light : theme.dark
    return ( 
        <header style={{background: themeColor.hbg,color: themeColor.hc,transition: "1s"}}>
            <NavLink className="site-logo" to='/' style={{color: themeColor.hc,transition: "1s"}}>highland</NavLink>
            <nav className="navigation">
                <ul>
                    <li>
                        <NavLink className="link" to='/' style={{color: themeColor.hc,transition: "1s"}}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink className="link" to='login' style={{color: themeColor.hc,transition: "1s"}}>Login</NavLink>
                    </li>
                    <li>
                        <NavLink className="link" to='signup' style={{color: themeColor.hc,transition: "1s"}}>Signup</NavLink>
                    </li>
                    <li style={{color: themeColor.hc,transition: "1s"}}>username</li>
                    <button style={{color: themeColor.hc,transition: "1s"}} onClick={themeToggler}>{theme.isLightTheme ? <HiMiniMoon /> : <BsFillSunFill />}</button>
                </ul>
            </nav>
        </header>
     );
}
 
export default Header;