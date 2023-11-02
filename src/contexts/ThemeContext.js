import React,{createContext,useState} from 'react';

export const ThemeContext = createContext()

const ThemeContextProvider = (props) => {

    const [theme,setTheme] = useState({
        isLightTheme: true,
        light: {hbg:'rgb(194, 194, 194)',bbg:'rgb(227, 227, 227)',hc:'rgb(33, 33, 33)',bc:'rgb(19, 19, 19)',bcb:'rgb(166, 166, 166)'},
        dark: {hbg:'rgb(19, 19, 19)',bbg:'rgb(35, 35, 35)',hc:'rgb(188, 188, 188)',bc:'rgb(229, 229, 229)',bcb:'rgb(72, 72, 72)'},
    })

    const themeSwitcher = () =>{
        setTheme({...theme,isLightTheme: !theme.isLightTheme})
    }

    return ( 
        <ThemeContext.Provider value={{...theme,themeSwitcher}}>
            {props.children}
        </ThemeContext.Provider>
     );
}
 
export default ThemeContextProvider;