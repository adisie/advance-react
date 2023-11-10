

import React, { Component } from 'react';
import {ThemeContext} from '../contexts/ThemeContext';


class Skills extends Component { 
    render() { 
        return (
            <ThemeContext.Consumer>
                {(themeContext)=>{
                    const {isLightTheme,light,dark} = themeContext;
                    const theme = isLightTheme ? light : dark;
                    return (
                        <div className='content' style={{background: theme.cbg,color: theme.ctc,transition: "1s"}}>
                            <h3>Skills</h3>
                        </div>
                    )
                }}
            </ThemeContext.Consumer>
        );
    }
}
 
export default Skills;