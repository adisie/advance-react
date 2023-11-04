
import {AiOutlineSend} from 'react-icons/ai';
import ThemeStore from '../../stores/ThemeStore';

const NewBlogForm = () => {

    const {isLightTheme,light,dark} = ThemeStore();
    
    const theme = isLightTheme ? light : dark;

    // functions
    const adjustTextAreaHeight = e =>{
        e.target.style.height = "29px";
        let scHeight = e.target.scrollHeight;
        e.target.style.height = `${scHeight}px`
    }
    return ( 
        <div className="new-blog-form">
            <form action="">
                <textarea name="body" onKeyUp={adjustTextAreaHeight} style={{background: theme.bbg,color: theme.hc,borderColor: theme.hc}}></textarea>
                <button type="submit" style={{color: theme.hc,transition: "1s"}}><AiOutlineSend /></button>
            </form>
        </div>
     );
}
 
export default NewBlogForm;