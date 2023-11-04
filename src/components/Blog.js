

import BlogContainer from "./blog-components/BlogContainer";
import NewBlogForm from "./blog-components/NewBlogForm";

import ThemeStore from "../stores/ThemeStore";

const Blogs = () => {

    const {isLightTheme,light,dark} = ThemeStore();
    
    const theme = isLightTheme ? light : dark;

    return ( 
        <div className="blogs" style={{background: theme.bbg,transition: "1s"}}>
            <BlogContainer />
            <NewBlogForm />
        </div>
     );
}
 
export default Blogs;