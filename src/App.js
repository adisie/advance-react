import { Route,Routes } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import Blog from "./components/Blog";
import Footer from "./components/Footer";

import './css/index.css';

const App = () => {
    return ( 
        <div className="container">
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="blogs" element={<Blog />} />
            </Routes>
        </div>
     );
}
 
export default App;