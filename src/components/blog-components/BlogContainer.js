import axios from 'axios';
import { useEffect } from 'react';

import SingleBlog from "./SingleBlog";
import BlogStore from "../../stores/BlogStore";

const BlogContainer = () => {
    const {blogs,getAllBlogs} = BlogStore();


    // effects

    useEffect(()=>{
        fetchAllBlogs();
    },[])


    //functions 
    const fetchAllBlogs = async () => {
        const result = await axios.get('http://localhost:3050/blogs')
        getAllBlogs(result.data.blogs)

    }
    
    return ( 
        <div className="blog-container">
            {blogs ? blogs.map(blog=>{
                return (
                    <SingleBlog key={blog._id} blog={blog} />
                )
            }) : <h3>No Blogs Yet</h3>}
        </div>
     );
}
 
export default BlogContainer;