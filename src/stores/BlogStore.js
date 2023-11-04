
import { create } from "zustand";


const BlogStore = create((set)=>({
    blogs: null,
    getAllBlogs: (data)=>set((state)=>({
        blogs: [...data]
    })),
    newBlog: (blog)=>set((state)=>({
        blogs: [blog,...state.blogs]
    })),
    updateBlog: (blog)=>set((state)=>({
        blogs: state.blogs
    })),
    deleteBlog: (id)=>set((state)=>({
        blogs: state.blogs.filter(blog=>{
            return blog._id !== id
        })
    }))
}))

export default BlogStore;