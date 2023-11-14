import { useContext } from "react"

import { ThemeContext } from "../contexts/ThemeContext"


const Signup = () => {
    const {theme} = useContext(ThemeContext)
    const themeColor = theme.isLightTheme ? theme.light : theme.dark
    return ( 
        <div className="auth-container" style={{background: themeColor.bbg,transition: "1s"}}>
            <div className="form-container">
                <form style={{background: themeColor.hbg,transition: "1s"}}>
                    <input type="text" name="username" placeholder="username" required tyle={{color: themeColor.hc,borderColor: themeColor.hc,transition: '1s'}}/>
                    <div className="error username"></div>
                    <input type="text" name="email" placeholder="email" required tyle={{color: themeColor.hc,borderColor: themeColor.hc,transition: '1s'}}/>
                    <div className="error email"></div>
                    <input type="password" name="password" placeholder="password" required tyle={{color: themeColor.hc,borderColor: themeColor.hc,transition: '1s'}} />
                    <div className="error password"></div>
                    <button style={{background: themeColor.hc,color: themeColor.hbg,transition: "1s"}}>Sign up</button>
                </form>
            </div>
        </div>
     );
}
 
export default Signup;