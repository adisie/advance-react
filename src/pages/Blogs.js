import { useEffect, useContext} from "react"
import { Navigate } from "react-router-dom"

import { AuthContext } from "../contexts/AuthContext"

const Blogs = () => {

    // contexts 
    const {user} = useContext(AuthContext)

    return ( 
        <>
        {
            user
             ? 
             <h3>Blogs</h3>
             : 
             <Navigate to='/login' />
        }
        </>
     );
}
 
export default Blogs;