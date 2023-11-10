import React, {createContext,useState } from 'react';
import { v4 as uuid4 } from 'uuid';

export const BookContext = createContext();

const BookContextProvider = (props) => {
    // states
    const [books,setBooks] = useState([
        {title: "Oromay",id: 1},
        {title: "Dertogada",id: 2},
    ])

    // functions

    const addNewBook = title => {
        setBooks([{title,id: uuid4()},...books]);
    }
    return ( 
        <BookContext.Provider value={{books,addNewBook}}>
            {props.children}
        </BookContext.Provider>
     );
}
 
export default BookContextProvider;
