
import {AiFillEdit} from 'react-icons/ai';
import {HiTrash} from 'react-icons/hi2';

import ThemeStore from '../../stores/ThemeStore';


const SingleBlog = () => {

    const {isLightTheme,light,dark} = ThemeStore();
    
    const theme = isLightTheme ? light : dark;

    return ( 
        <div className="blog" style={{background: theme.hbg,color: theme.hc,transition: "1s"}}>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat optio non adipisci quidem, laudantium voluptatem aliquam corporis et quod? Quidem eius ullam iste at, tempore unde provident magni fuga? Architecto corrupti nesciunt non id reiciendis aperiam soluta voluptatem dolorem! Autem odit optio numquam labore! Deserunt cumque ut tempore earum exercitationem.</p>
            <div className="edit-delete-btn-container">
                <button style={{color: theme.hc,transition: "1s"}}><AiFillEdit /></button>
                <button style={{color: theme.hc,transition: "1s"}}><HiTrash /></button>
            </div>
        </div>
     );
}
 
export default SingleBlog;