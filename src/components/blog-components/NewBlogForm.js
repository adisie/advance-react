import { useState } from 'react';
import axios from 'axios';
import {AiOutlineSend} from 'react-icons/ai';
import ThemeStore from '../../stores/ThemeStore';
import BlogStore from '../../stores/BlogStore';

const NewBlogForm = () => {

    const [formField,setFormField] = useState({
        body: '',
    })

    const {isLightTheme,light,dark} = ThemeStore();
    
    const theme = isLightTheme ? light : dark;

    let {newBlog} = BlogStore();


    // functions
    const adjustTextAreaHeight = e =>{
        e.target.style.height = "29px";
        let scHeight = e.target.scrollHeight;
        e.target.style.height = `${scHeight}px`
    }

    const textInputChangeHandler = e => {
        setFormField({body: e.target.value})
    }

    const formSubmitHandler = async e => {
        e.preventDefault()
        const result = await axios.post("http://localhost:3050/blogs",{body: formField.body})
        newBlog(result.data.blog);
        setFormField({body:''})
        e.target.firstChild.style.height = "27px"
    }

   
    return ( 
        <div className="new-blog-form">
            <form action="" onSubmit={formSubmitHandler}>
                <textarea name="body" onKeyUp={adjustTextAreaHeight} style={{background: theme.bbg,color: theme.hc,borderColor: theme.hc}} value={formField.body} onChange={textInputChangeHandler}></textarea>
                <button type="submit" style={{color: theme.hc,transition: "1s"}}><AiOutlineSend /></button>
            </form>
        </div>
     );
}
 
export default NewBlogForm;