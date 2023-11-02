import { NavLink } from "react-router-dom";

const Header = () => {
    return ( 
        <header>
            <NavLink className='site-logo' to='/'>blogs</NavLink>
            <nav className="navigation">
                <ul>
                    <li>
                        <NavLink className="link" to='/'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink className="link" to='blogs'>Blogs</NavLink>
                    </li>
                </ul>
                <button>switch theme</button>
                <button>login/out</button>
            </nav>
        </header>
     );
}
 
export default Header;