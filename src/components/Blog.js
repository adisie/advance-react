import {AiFillEdit} from 'react-icons/ai';
import {AiFillDelete} from 'react-icons/ai';
import {AiOutlineSend} from 'react-icons/ai';

const Blog = () => {


    // functions 

    const adjustTextAreaHeight = e =>{
        e.target.style.height = '27px'
        let scHeight = e.target.scrollHeight
        e.target.style.height = `${scHeight}px`
    }


    return ( 
        <div className="blogs">
            <div className="blog-container">
                <div className="blog">
                    <p>Menilek II, also spelled Menelik II, original name Sahle Mariam, also spelled Sahle Maryam or Sahle Miriam, (born August 17, 1844, Ankober, Shewa [Shoa], Ethiopia—died December 12, 1913, Addis Ababa), king of Shewa (or Shoa; 1865–89) and emperor of Ethiopia (1889–1913). One of Ethiopia’s greatest rulers, he expanded the empire almost to its present-day borders, repelled an Italian invasion in the Battle of Adwa in 1896, and carried out a wide-ranging program of modernization.Menilek II, also spelled Menelik II, original name Sahle Mariam, also spelled Sahle Maryam or Sahle Miriam, (born August 17, 1844, Ankober, Shewa [Shoa], Ethiopia—died December 12, 1913, Addis Ababa), king of Shewa (or Shoa; 1865–89) and emperor of Ethiopia (1889–1913). One of Ethiopia’s greatest rulers, he expanded the empire almost to its present-day borders, repelled an Italian invasion in the Battle of Adwa in 1896, and carried out a wide-ranging program of modernization.</p>
                    <div className='btn-container'>
                        <button><AiFillEdit /></button>
                        <button><AiFillDelete /></button>
                    </div>
                </div>
            </div>
            <div className='form-container'>
                <form>
                    <textarea name="body" onKeyUp={adjustTextAreaHeight}></textarea>
                    <button><AiOutlineSend /></button>
                </form>
            </div>
        </div>
     );
}
 
export default Blog;