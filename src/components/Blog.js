import { useContext,useState,useEffect } from 'react';
import axios from 'axios';
import { ThemeContext } from '../contexts/ThemeContext';

import SignleBlog from './SingleBlog';
import NewBlogForm from './NewBlogForm';

const Blog = () => {

    // states 
    const [blogs,setBlogs] = useState(null)


    // efects 

    useEffect(()=>{
        getBlogs();
    },[])

    const {isLightTheme,light,dark,themeSwitcher} = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;


    // functions 
    const getBlogs = async () =>{
        const res = await axios.get("http://localhost:3050/blogs")
        setBlogs(res.data.blogs)
    }



    return ( 
        <div className="blogs" style={{background: theme.bbg,transition: "1s"}}>
            <div className="blog-container" >
                {blogs && blogs.map(blog=>{
                    return (
                        <SignleBlog key={blog._id} blog={blog} blogs={blogs} setBlogs={setBlogs}/>
                    )
                })}
            </div>
            <NewBlogForm blogs={blogs} setBlogs={setBlogs} />
        </div>
     );
}
 
export default Blog;