import { createContext,useReducer } from "react";

import { ThemeReducer } from "../reducers/ThemeReducer";
export const ThemeContext = createContext();


const ThemeContextProvider = (props) => {
    const [theme,themeDispatcher] = useReducer(ThemeReducer,{
        isLightTheme: true,
        light: {hbg: 'rgb(209, 209, 209)',htc: 'rgb(43, 43, 43)',bbg: 'rgb(233, 233, 233)',btc: 'rgb(11, 11, 11)'},
        dark: {hbg: 'rgb(11, 11, 11)',htc: 'rgb(170, 169, 169)',bbg: 'rgb(33, 33, 33)',btc: 'rgb(231, 231, 231)'},
    })
    return ( 
        <ThemeContext.Provider value={{theme,themeDispatcher}}>
            {props.children}
        </ThemeContext.Provider>
     );
}
 
export default ThemeContextProvider;