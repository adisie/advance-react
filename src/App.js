import { Routes,Route } from "react-router-dom";

//context providers
import ThemeContextProvider from "./contexts/ThemeContext";
import AuthContextProvider from "./contexts/AuthContext";
import BlogsContextProvider from "./contexts/BlogsContext";

// private routes
import PrivateRoutes from "./utils/PrivateRoutes";

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
            <AuthContextProvider>
                <ThemeContextProvider>
                    <BlogsContextProvider>
                        <Header />
                        <Routes>
                            <Route index element={<Home />} />
                            <Route element={<PrivateRoutes />}>    
                            <Route path="blogs" element={<Blogs />} />
                            </Route>
                            <Route path="about" element={<About />} />
                            <Route path="contact" element={<Contact />} />
                            <Route path="login" element={<Login />} />
                            <Route path="signup" element={<Signup />} />
                        </Routes>
                    </BlogsContextProvider>
                </ThemeContextProvider>
            </AuthContextProvider>
        </div>
     );
}
 
export default App;