import React, { Component,createContext } from 'react';

export const AuthContext = createContext();


class AuthContextProvider extends Component {
    state = { 
        isLoggedIn: false,
        username: "",
     } 

    logInOut = () => {
        this.setState({
            isLoggedIn: !this.state.isLoggedIn,
            username: this.state.isLoggedIn ? "" : "Menelik"
        })
    }
    render() { 
        return (
            <AuthContext.Provider value={{...this.state,logInOut:this.logInOut}}>
                {this.props.children}
            </AuthContext.Provider>
        );
    }
}
 
export default AuthContextProvider;
