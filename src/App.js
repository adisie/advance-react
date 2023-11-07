import axios from "axios";
import { useState,useEffect } from "react";

const App = () => {
    // states 
    const [blogs,setBlogs] = useState([]);

    const [body,setBody] = useState('');

    const [updateBody,setUpdateBody] = useState({
        _id: null,
        body: '',
    })

    // effects
    useEffect(()=>{
        getAllBlogs();
    },[]);
    
    // FUNCTIONS

    // get all blogs
    const getAllBlogs = async () => {
        const result = await axios.get("http://localhost:3050/blogs")
        setBlogs([...blogs,...result.data.blogs])
        console.log(blogs)
    }

    // delete blog
    const deleteBlog = async _id => {
        const result = await axios.delete(`http://localhost:3050/blogs/${_id}`)
        
        const newBlogs = blogs.filter(blog=>{
            return blog._id !== _id
        })
        setBlogs([...newBlogs]);
    }

    const textInputHandler = e => {
        setBody(e.target.value)
    }

    const addNewBlogHandler = async e => {
        e.preventDefault();
        const blog = await axios.post("http://localhost:3050/blogs",{body})
        setBlogs([blog.data.blog,...blogs]);
        setBody('');
    }

    const updateBlog = blog =>{
        setUpdateBody({
            _id: blog._id,
            body: blog.body,
        })
    }

    const updateTextInputHandler = e => {
        setUpdateBody({...updateBody,body: e.target.value})
    }

    const saveUpdatedBlog = async e => {
        e.preventDefault();
        const blog = await axios.put(`http://localhost:3050/blogs/${updateBody._id}`,{body: updateBody.body});

        const newBlogs = [...blogs];
        const blogIndex = blogs.findIndex(blog=>{
            return blog._id === updateBody._id
        })
        newBlogs[blogIndex] = blog.data.blog;

        setBlogs([...newBlogs]);

        setUpdateBody({
            _id: null,
            body: ''
        })

    }

    return ( 
        <div className="container">
            <div>
                <h4>Blogs</h4>
                {blogs.map(blog=>{
                    return (
                        <div key={blog._id}>
                            <p>{blog.body}</p>
                            <button onClick={()=>updateBlog(blog)}>edit</button><span> | </span>
                            <button onClick={()=>deleteBlog(blog._id)}>delete</button>
                        </div>
                    )
                })}
            </div>
            {
                updateBody._id && <div>
                <h4>Edit Blog</h4>
                <form>
                    <textarea name="body" value={updateBody.body} onChange={updateTextInputHandler}></textarea>
                    <button onClick={saveUpdatedBlog}>save changes</button>
                </form>
            </div>
            }
            {
                !updateBody._id && <div>
                <h4>Add New Blog</h4>
                <form onSubmit={addNewBlogHandler}>
                    <textarea name="body" value={body} onChange={textInputHandler}></textarea>
                    <button>add</button>
                </form>
            </div>
            }
        </div>
     );
}
 
export default App;