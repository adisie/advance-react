
import { useContext } from "react";
import { BlogsContext } from "../../contexts/BlogsContext";

import SingleBlog from "./SingleBlog";

const Blog = () => {
    const {blogs} = useContext(BlogsContext);
    return ( 
        <div className="blogs">
            {blogs.map(blog=>{
                return (
                    <SingleBlog key={blog.id} blog={blog}/>
                )
            })}
        </div>
     );
}
 
export default Blog;