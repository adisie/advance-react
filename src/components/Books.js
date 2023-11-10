import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const Books = ({books}) => {
    const {isLightTheme,light,dark} = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;
    return ( 
        <div className="book-list">
            <ul>
                {books.map(book=>{
                    return(
                        <li key={book.id} style={{background: theme.hbg,color: theme.htc}}>{book.title}</li>
                    )
                })}
            </ul>
        </div>
     );
}
 
export default Books;