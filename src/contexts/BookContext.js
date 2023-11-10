import React, {createContext,useReducer,useEffect } from 'react';
import { BookReducer } from '../reducers/BookReducer';

export const BookContext = createContext();

const BookContextProvider = (props) => {
    // reducer

    const [books,dispatch] = useReducer(BookReducer,[
    ],()=>{
        const localBooks = JSON.parse(localStorage.getItem('books'));
        return localBooks ? localBooks : []
    })

    // use effect
    useEffect(()=>{
        localStorage.setItem('books',JSON.stringify(books))
    },[books]);
    
    return ( 
        <BookContext.Provider value={{books,dispatch}}>
            {props.children}
        </BookContext.Provider>
     );
}
 
export default BookContextProvider;
