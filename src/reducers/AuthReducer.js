



export const AuthReducer = (state,action) => {
    switch(action.type){
        case 'LOG_OUT':
            return {...state,isLoggedIn: !state.isLoggedIn,username: ''}
        case 'LOG_IN':
            return {...state,isLoggedIn: true,username: action.username}
        default:
            return state
    }
}