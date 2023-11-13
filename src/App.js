
import {Routes,Route} from 'react-router-dom'

// private routes
import PrivateRoutes from './utils/PrivateRoutes'

// context provider
import ThemeContextProvider from './contexts/ThemeContext'

// components
import Header from './components/Header'

// pages
import Home from './pages/Home'
import Blogs from './pages/Blogs'
import Login from './pages/Login'
import Signup from './pages/Signup'

// css
import './assets/css/index.css'

const App = () => {
    return ( 
        <div className="container">
            <ThemeContextProvider>
                <Header />
                <Routes>
                    <Route index element={<Home />} />
                    <Route element={<PrivateRoutes />}>
                        <Route path='blogs' element={<Blogs />}/>
                    </Route>
                    <Route path='login' element={<Login />} />
                    <Route path='signup' element={<Signup />} />
                </Routes>
            </ThemeContextProvider>
        </div>
     );
}
 
export default App;