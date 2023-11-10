import { v4 as uuid4 } from "uuid";

export const BookReducer = (state,action) => {
    switch(action.type){
        case 'ADD_BOOK':
            const newBooks = [{title: action.book.title,id: uuid4()},...state]
            return newBooks;
        case "DELETE_BOOK":
            const newBookss = state.filter(book=>{
                return book.id !== action.id
            })
            return newBookss;
        default:
            return state;
    }
}