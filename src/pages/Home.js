
import { NavLink } from "react-router-dom";


const Home = () => {
    return ( 
        <div>
            <h3>Home</h3>
            <NavLink className="link" to="blogs">Blogs</NavLink>
        </div>
     );
}
 
export default Home;