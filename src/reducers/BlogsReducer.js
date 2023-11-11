import { v4 as uuid4 } from "uuid"


export const BlogsReducer = (state,action) => {
    switch(action.type){
        case 'ADD_NEW_BLOG':
            return [{body: action.body,author: action.author,id: uuid4()},...state]
        case 'DELETE_BLOG':
            return state.filter(blog=>blog.id !== action.id)
        
        default:
            return state;
    }
}