import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { BookContext } from "../contexts/BookContext";

const Books = ({books}) => {
    const {isLightTheme,light,dark} = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;
    const {dispatch} = useContext(BookContext)
    return ( 
        <div className="book-list">
            <ul>
                {books.map(book=>{
                    return(
                        <li key={book.id} style={{background: theme.hbg,color: theme.htc}} onClick={()=>dispatch({type: "DELETE_BOOK",id: book.id})}>{book.title}</li>
                    )
                })}
            </ul>
        </div>
     );
}
 
export default Books;