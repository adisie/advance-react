
import { useState } from 'react';

import { useContext } from 'react';
import {AiOutlineSend} from 'react-icons/ai';

import { ThemeContext } from '../../contexts/ThemeContext';
import {AuthContext} from '../../contexts/AuthContext';
import {BlogsContext} from '../../contexts/BlogsContext';

const NewBlogForm = () => {
    const {theme} = useContext(ThemeContext);
    const themeColor = theme.isLightTheme ? theme.light : theme.dark;

    const {auth} = useContext(AuthContext);
    const {blogsDispatcher} = useContext(BlogsContext);

    // states

    const [body,setbody] = useState('');

    // function
    const textAreaHeightHandler = e => {
        e.target.style = "31px"
        let scHeight = e.target.scrollHeight;
        e.target.style.height = `${scHeight}px`;
    }

    const addNewBlogHandler = e => {
        e.preventDefault()
        blogsDispatcher({type: 'ADD_NEW_BLOG',body,author: auth.username})
        setbody('');
        e.target.body.style.height = "31px";
    }
    return ( 
        <div className="form-container">
            <form onSubmit={addNewBlogHandler}>
                <textarea onKeyUp={textAreaHeightHandler} name="body" style={{background: themeColor.hbg,color: themeColor.htc,borderColor: themeColor.htc}} value={body} onChange={(e)=>setbody(e.target.value)}></textarea>
                <button style={{color: themeColor.htc,transition: "1s"}}><AiOutlineSend /></button>
            </form>
        </div>
     );
}
 
export default NewBlogForm;