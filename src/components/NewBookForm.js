import { useContext,useState } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { BookContext } from "../contexts/BookContext";

const NewBookForm = () => {
    // contexts
    const {isLightTheme,light,dark} = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;

    const {dispatch} = useContext(BookContext);

    // states
    const [title,setTitle] = useState('');

    // functions
    const submitHandler = e => {
        e.preventDefault();
        dispatch({type: 'ADD_BOOK',book: {title}});
        setTitle('');
    }
    return ( 
        <div className="form-container">
            <form onSubmit={submitHandler}>
                <input type="text" placeholder="book title"  required style={{background: theme.hbg,color: theme.htc,borderColor: theme.htc}} value={title} onChange={e=>setTitle(e.target.value)}/>
                <button style={{background: theme.htc,color: theme.hbg}}>add book</button>
            </form>
        </div>
     );
}
 
export default NewBookForm;