import { useContext,useState } from "react"
import { Navigate } from "react-router-dom"

import { ThemeContext } from "../contexts/ThemeContext"
import { AuthContext } from "../contexts/AuthContext"


const Login = () => {
    //contexts
    const {theme} = useContext(ThemeContext)
    const themeColor = theme.isLightTheme ? theme.light : theme.dark

    const {user,setUser} = useContext(AuthContext)

    // states
    const [loginFormFeild,setLoginFormField] = useState({
        username: '',
        password: '',
    })

    // input field change handler 
    const inputFieldChangeHandler = e => {
        const {name,value} = e.target 
        setLoginFormField({
            ...loginFormFeild,
            [name]: value
        })
    }

    // login submit handler
    const loginSubmitHandler = async e => {
        e.preventDefault()
        const usernameError = document.querySelector('.error.username')
        const passwordError = document.querySelector('.error.password')
        
        usernameError.textContent = ''
        passwordError.textContent = ''

        const response = await fetch('/users/login',{
            method: 'POST',
            body: JSON.stringify(loginFormFeild),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const data = await response.json()

       

        if(data.user){
            setUser(data.user)
            setLoginFormField({
                username: '',
                password: ''
            })
            usernameError.textContent = ''
            passwordError.textContent = ''
        }

        if(data.errors){
            usernameError.textContent = data.errors.username 
            passwordError.textContent = data.errors.password
        }

    }
    return ( 
        <>
        {
            user 
            ?
            <Navigate to='/blogs' />
            :
            <div className="auth-container" style={{background: themeColor.bbg,transition: "1s"}}>
                <div className="form-container">
                    <form style={{background: themeColor.hbg,transition: "1s"}} onSubmit={loginSubmitHandler}>
                        <input type="text" name="username" placeholder="username" required style={{color: themeColor.hc,borderColor: themeColor.hc,transition: '1s'}} value={loginFormFeild.username} onChange={inputFieldChangeHandler}/>
                        <div className="error username"></div>
                        <input type="password" name="password" placeholder="password" required style={{color: themeColor.hc,borderColor: themeColor.hc,transition: '1s'}} value={loginFormFeild.password} onChange={inputFieldChangeHandler}/>
                        <div className="error password"></div>
                        <button style={{background: themeColor.hc,color: themeColor.hbg,transition: "1s"}}>Login</button>
                    </form>
                </div>
            </div>
        }
        </>
     );
}
 
export default Login;