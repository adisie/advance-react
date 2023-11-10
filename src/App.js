import { Route,Routes } from "react-router-dom";


// import context provider
import ThemeContextProvider from "./contexts/ThemeContext";
import AuthContextProvider from "./contexts/AuthContext";

// private route
import PrivateRoutes from "./utils/PrivateRoutes";

import Heeader from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Skills from "./pages/Skills";
import Experience from "./pages/Experience";

import './assets/css/index.css';

const App = () => {
    return ( 
        <div className="container">
            <AuthContextProvider>
                <ThemeContextProvider>
                    <Heeader />
                    <Routes>
                        <Route index element={<Home />} />
                        <Route element={<PrivateRoutes />}>
                            <Route path="experience" element={<Experience />} />
                            <Route path="skills" element={<Skills />} />
                        </Route>
                        <Route path="login" element={<Login />} />
                        <Route path="signup" element={<Signup />} />
                    </Routes>
                </ThemeContextProvider>
            </AuthContextProvider>
        </div>
     );
}
 
export default App;