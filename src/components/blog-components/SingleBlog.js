import axios from 'axios';
import {AiFillEdit} from 'react-icons/ai';
import {HiTrash} from 'react-icons/hi2';

import ThemeStore from '../../stores/ThemeStore';
import BlogStore from '../../stores/BlogStore';


const SingleBlog = ({blog}) => {

    const {isLightTheme,light,dark} = ThemeStore();
    
    const theme = isLightTheme ? light : dark;

    const {deleteBlog} = BlogStore();

    // functions 

    const deleteBlogHandler = async (id) =>{
        await axios.delete(`http://localhost:3050/blogs/${id}`)
        deleteBlog(id)
    }

    return ( 
        <div className="blog" style={{background: theme.hbg,color: theme.hc,transition: "1s"}}>
            <p>{blog.body}</p>
            <div className="edit-delete-btn-container">
                <button style={{color: theme.hc,transition: "1s"}}><AiFillEdit /></button>
                <button style={{color: theme.hc,transition: "1s"}} onClick={()=>deleteBlogHandler(blog._id)}><HiTrash /></button>
            </div>
        </div>
     );
}
 
export default SingleBlog;