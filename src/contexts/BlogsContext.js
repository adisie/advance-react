
import { useReducer,createContext,useEffect } from "react";

import { BlogsReducer } from "../reducers/BlogsReducer";

export const BlogsContext = createContext();


const BlogsContextProvider = (props) => {
    const [blogs,blogsDispatcher] = useReducer(BlogsReducer,[],()=>{
        const localDate = JSON.parse(localStorage.getItem('blogs'))
        return localDate ? localDate : []
    })


    // efects

    useEffect(()=>{
        localStorage.setItem('blogs',JSON.stringify(blogs))
    },[blogs]);
    return ( 
        <BlogsContext.Provider value={{blogs,blogsDispatcher}}>
            {props.children}
        </BlogsContext.Provider>
     );
}
 
export default BlogsContextProvider;