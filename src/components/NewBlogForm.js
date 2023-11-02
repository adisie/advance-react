import { useContext,useState,useEffect } from 'react';
import axios from 'axios';
import { ThemeContext } from '../contexts/ThemeContext';

import {AiOutlineSend} from 'react-icons/ai';



const NewBlogForm = ({blogs,setBlogs}) => {
    const {isLightTheme,light,dark,themeSwitcher} = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;

    // states 
    

    const [text,setText] = useState('')

    const adjustTextAreaHeight = e =>{
        e.target.style.height = '28px'
        let scHeight = e.target.scrollHeight
        e.target.style.height = `${scHeight}px`
    }

    const textInputChange = e =>{
        setText(e.target.value)
    }

    const formSubmitHandler = async e => {
        e.preventDefault()
        const res = await axios.post("http://localhost:3050/blogs",{body: text})
        setBlogs([res.data,...blogs])
        setText('')
        e.target.firstChild.style.height = "28px"
    }

    return ( 
        <div className='form-container'>
            <form onSubmit={formSubmitHandler}>
                <textarea name="body" onKeyUp={adjustTextAreaHeight} style={{background: theme.bbg,color: theme.hc,borderColor: theme.hc}} value={text} onChange={textInputChange}></textarea>
                <button style={{borderColor: theme.hc,color: theme.hc,transition: "1s"}}><AiOutlineSend /></button>
            </form>
        </div>
     );
}
 
export default NewBlogForm;