import {Routes,Route} from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import Blogs from './components/Blog';
import About from './components/About';
import NotFound from './components/NotFound';

import './css/index.css';

const App = () => {
    return ( 
        <div className="container">
            <Header />
            <Routes>
                <Route index element={<Home />} />
                <Route path='blogs' element={<Blogs />} />
                <Route path='about' element={<About />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </div>
     );
}
 
export default App;