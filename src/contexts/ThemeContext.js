
import React, { Component,createContext } from 'react';

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
    state = { 
        isLightTheme: true,
        light: {hbg: 'rgb(186, 186, 186)',cbg: 'rgb(221, 221, 221)',htc: 'rgb(39, 39, 39)',ctc: 'rgb(13, 13, 13)'},
        dark: {hbg: 'rgb(13, 13, 13)',cbg: 'rgb(39, 39, 39)',htc: 'rgb(168, 164, 164)',ctc: 'rgb(219, 219, 219)'},
     }
    
    themeToggler = () => {
        this.setState({isLightTheme: !this.state.isLightTheme});
    }
    render() { 
        return (
            <ThemeContext.Provider value={{...this.state,themeToggler:this.themeToggler}}>
                {this.props.children}
            </ThemeContext.Provider>
        );
    }
}
 
export default ThemeContextProvider;
