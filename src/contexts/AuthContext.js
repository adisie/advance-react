

import { createContext,useState , useEffect} from "react"


export const AuthContext = createContext()

const AuthContextProvider = (props) => {
    
    // states
    const [user,setUser] = useState(null)

    // effect
    useEffect(()=>{
        const localData = JSON.parse(localStorage.getItem('user'))
        setUser(localData)
    },[])

    // functions
    //login user function
    const loginUser = () => {

    }

    // signup user
    const signupUser = () => {

    }

    // check auth
    const checkAuth = () => {

    }
    return ( 
        <AuthContext.Provider value={{user,setUser,loginUser,signupUser,checkAuth}}>
            {props.children}
        </AuthContext.Provider>
     );
}
 
export default AuthContextProvider