import { Routes,Route } from "react-router-dom";

//context providers
import ThemeContextProvider from "./contexts/ThemeContext";

// components
import Header from "./components/Header";

// pages
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";


// css
import './assets/css/index.css';

const App = () => {
    return ( 
        <div className="container">
            <ThemeContextProvider>
                <Header />
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="blogs" element={<Blogs />} />
                    <Route path="about" element={<About />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="login" element={<Login />} />
                    <Route path="signup" element={<Signup />} />
                </Routes>
            </ThemeContextProvider>
        </div>
     );
}
 
export default App;