import { Route,Routes } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import Blog from "./components/Blog";

import ThemeContextProvider from "./contexts/ThemeContext";

import './css/index.css';

const App = () => {
    return ( 
        <div className="container">
            <ThemeContextProvider>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="blogs" element={<Blog />} />
                </Routes>
            </ThemeContextProvider>
        </div>
     );
}
 
export default App;