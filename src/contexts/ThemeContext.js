import { createContext,useState } from "react"

export const ThemeContext = createContext()


const ThemeContextProvider = (props) => {
    const [theme,setTheme] = useState({
        isLightTheme: true,
        light: {hbg: 'rgb(196, 196, 196)',hc: 'rgb(18, 18, 18)',bbg: 'rgb(214, 214, 214)'},
        dark: {hbg: 'rgb(14, 14, 14)',hc: 'rgb(177, 177, 177)',bbg: 'rgb(31, 31, 31)'},
    })

    const themeToggler = () => {
        setTheme({
            ...theme,
            isLightTheme: !theme.isLightTheme
        })
    }
    return ( 
        <ThemeContext.Provider value={{theme,themeToggler}}>
            {props.children}
        </ThemeContext.Provider>
     );
}
 
export default ThemeContextProvider;