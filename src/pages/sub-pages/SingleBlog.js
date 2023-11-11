
import { useContext } from 'react';

import {AiFillDelete} from 'react-icons/ai';
import author_img from '../../assets/images/menelik4.jpg';

import {ThemeContext} from '../../contexts/ThemeContext';
import {BlogsContext} from '../../contexts/BlogsContext';
import {AuthContext} from '../../contexts/AuthContext';

const SingleBlog = ({blog}) => {
    const {theme} = useContext(ThemeContext);
    const themeColor = theme.isLightTheme ? theme.light : theme.dark;

    const {auth} = useContext(AuthContext);

    const {blogsDispatcher} = useContext(BlogsContext)

    return ( 
        <div className="single-blog">
            <div className='single-blog-container'>
                { blog.author === auth.username && <button onClick={()=>blogsDispatcher({type: 'DELETE_BLOG',id: blog.id})} className="delete-btn" style={{color: themeColor.htc}}><AiFillDelete /></button>}
                <p style={{background: themeColor.hbg,color: themeColor.htc,transition: "1s"}}>{blog.body}</p>
                <div className='blog-author-container'>
                    <img src={author_img} alt="author-img" className="author-img"  style={{width: "32px", height: "32px"}}/>
                    <span style={{color: themeColor.btc,transition: "1s"}}>{blog.author}</span>
                </div>
            </div>
        </div>
     );
}
 
export default SingleBlog;