import { useContext } from "react";


import { ThemeContext } from "../contexts/ThemeContext";
import { BookContext } from "../contexts/BookContext";


import Books from "./Books";
import NewBookForm from "./NewBookForm";

const BookList = () => {
    // contexts
    const {isLightTheme,light,dark} = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;

    const {books} = useContext(BookContext);
   
    return ( 
        <div className="books-container" style={{background: theme.bbg}}>
            <Books books={books}/>
            <NewBookForm />
        </div>
     );
}
 
export default BookList;