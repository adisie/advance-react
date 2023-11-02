


import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

import {AiFillEdit} from 'react-icons/ai';
import {AiFillDelete} from 'react-icons/ai';
import {AiOutlineSend} from 'react-icons/ai';
import axios from 'axios';

const SignleBlog = ({blog,blogs,setBlogs}) => {

    const {isLightTheme,light,dark,themeSwitcher} = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;
    // functions 

    const deleteBlog = async id => {
        await axios.delete(`http://localhost:3050/blogs/${id}`)

        const newBlogs = [...blogs].filter(blog=>{
            return blog._id !== id
        })

        setBlogs(newBlogs);
    }

    return ( 
            <div className="blog" style={{background:theme.bcb,color: theme.hc,transition: "1s"}}>
                <p>{blog.body}</p>
                <div className='btn-container'>
                    <button style={{borderColor: theme.hc,color: theme.hc,transition: "1s"}}><AiFillEdit /></button>
                    <button style={{borderColor: theme.hc,color: theme.hc,transition: "1s"}} onClick={()=>deleteBlog(blog._id)}><AiFillDelete /></button>
                </div>
            </div>   
     );
}
 
export default SignleBlog;