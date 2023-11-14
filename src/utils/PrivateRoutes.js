
import {Outlet,Navigate} from 'react-router-dom'
import { useContext,useEffect } from 'react'
import { AuthContext } from '../contexts/AuthContext'

const PrivateRoutes = () => {

    const {user,setUser} = useContext(AuthContext)

    //effects
    useEffect(()=>{
        authChecker()
    },[])

    //functions

    // check auth
    const authChecker = async () => {
        const response = await fetch('/blogs/')
        const data = await response.json()
        
        if(data.user) {
            setUser(data.user)
            localStorage.setItem('user',JSON.stringify(data.user))
        }
        if(data.errors === 'AUTH_FAILED'){
            localStorage.removeItem('user')
            setUser(null)
        }

    }
    return ( 
        <>
            {
                user 
                ?
                <Outlet />
                :
                <Navigate to='login' />
            }
        </>
     );
}
 
export default PrivateRoutes;