import React, { Component,createContext } from 'react';

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
    state = { 
        isLightTheme: true,
        light: {hbg: 'rgb(204, 203, 203)',bbg: 'rgb(231, 231, 231)',htc: 'rgb(24, 24, 24)',btc: 'rgb(6, 6, 6)'},
        dark: {htc: 'rgb(204, 203, 203)',btc: 'rgb(231, 231, 231)',bbg: 'rgb(24, 24, 24)',hbg: 'rgb(6, 6, 6)'},
     } 

    themeToggler = () => {
        this.setState({isLightTheme: !this.state.isLightTheme})
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
