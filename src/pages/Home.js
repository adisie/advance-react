import {NavLink} from 'react-router-dom'
import { useContext } from 'react'

import {ThemeContext} from '../contexts/ThemeContext'


const Home = () => {
    const {theme} = useContext(ThemeContext)
    const themeColor = theme.isLightTheme ? theme.light : theme.dark
    return ( 
        <div className="home-container" style={{background: themeColor.bbg,transition: "1s"}}>
            <div className="content-container">
                <h3 style={{color: themeColor.hc,transition: "1s"}}>Hi! There I'm </h3>
                <h1 style={{color: themeColor.hc,transition: "1s"}}>Haddis Fanta</h1>
                <h3 style={{color: themeColor.hc,transition: "1s"}}>Software Engineer</h3>
                <p style={{color: themeColor.hc,transition: "1s"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, deserunt delectus dignissimos quam quis quod cumque eligendi neque at accusantium voluptatum officiis quibusdam laudantium enim perspiciatis praesentium eaque pariatur velit culpa aperiam provident suscipit hic optio. Corrupti, praesentium numquam. Corrupti est doloremque velit quae facere, labore adipisci suscipit expedita commodi dolorum iure consectetur quos! Maiores, esse aperiam impedit totam alias iusto illum quas. Perferendis minima numquam, vel ea facilis earum culpa quibusdam doloremque! Expedita eveniet iure ipsum illum nulla nemo mollitia eaque laborum, deleniti beatae qui, nisi vel saepe exercitationem similique alias et blanditiis voluptas animi iste in aperiam cupiditate ab? Enim unde aut praesentium laudantium, quae accusantium architecto eligendi, nesciunt tenetur molestias sit iste est vitae nulla quos eius. Amet sapiente dolores commodi voluptatibus iusto nobis minima repellat odit maiores, quis distinctio expedita quae delectus doloribus. Deleniti, blanditiis enim provident saepe neque deserunt mollitia ea error velit itaque odit.</p>
                <div className="btn-container">
                    <NavLink className='btn-link' style={{borderColor: themeColor.hc,color: themeColor.hc,transition: "1s"}}>Read More</NavLink>
                    <NavLink to='blogs' className='btn-link' style={{borderColor: themeColor.hc,color: themeColor.hc,transition: "1s"}}>Blogs</NavLink>
                </div>
            </div>
        </div>
     );
}
 
export default Home;