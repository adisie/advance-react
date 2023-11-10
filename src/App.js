

import ThemeContextProvider from "./contexts/ThemeContext";
import BookContextProvider from "./contexts/BookContext";

import Header from "./components/Header";
import BookList from "./components/BookList";

import './App.css';


const App = () => {
    return ( 
        <div className="container">
            <ThemeContextProvider>
                <Header />
                <BookContextProvider>
                    <BookList />
                </BookContextProvider>
            </ThemeContextProvider>
        </div>
     );
}
 
export default App;