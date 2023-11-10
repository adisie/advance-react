
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const Header = () => {
    const {isLightTheme,light,dark,themeToggler} = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;
    return ( 
        <header style={{background: theme.hbg,color: theme.htc}}>
            <h3 className="site-logo">highland</h3>
            <nav className="navigation">
                <ul>
                    <li>Home</li>
                    <li>Books</li>
                </ul>
                <button style={{color: theme.htc,borderColor: theme.htc}} onClick={themeToggler}>switch theme</button>
            </nav>
        </header>
     );
}
 
export default Header;