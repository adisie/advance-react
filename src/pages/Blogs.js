
import { useContext } from "react";

import Blog from "./sub-pages/Blog";
import NewBlogForm from "./sub-pages/NewBlogForm";
import { ThemeContext } from "../contexts/ThemeContext";

const Blogs = () => {
    const {theme} = useContext(ThemeContext);
    const themeColor = theme.isLightTheme ? theme.light : theme.dark;
    return ( 
        <div className="blogs-main-container"  style={{background: themeColor.bbg,transition: "1s"}}>
            <Blog />
            <NewBlogForm />
        </div>
     );
}
 
export default Blogs;