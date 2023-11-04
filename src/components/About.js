
import ThemeStore from "../stores/ThemeStore";

const About = () => {

    const {isLightTheme,light,dark} = ThemeStore();
    
    const theme = isLightTheme ? light : dark;

    return ( 
        <div className="about-container" style={{background: theme.bbg,transition: "1s"}}>
            <div className="about-me" style={{background: theme.hbg,color: theme.hc,transition: "1s"}}>
                <h1>About Me</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste accusantium, modi neque incidunt rem minima fugit voluptas iusto quas libero sequi expedita aliquam suscipit eaque illo labore. Totam id, eligendi explicabo est excepturi mollitia veniam quo molestias laborum quas, officiis obcaecati doloribus quis illum necessitatibus voluptate ipsum magnam repellendus dolorem magni omnis corrupti at. Sapiente molestias numquam perferendis nobis enim cupiditate provident quibusdam eum fugit quasi, soluta neque veniam tenetur magni. Commodi cumque praesentium accusamus dolores sequi, saepe eum quibusdam! Quasi ipsum ea officia consequatur provident laboriosam impedit nulla autem cupiditate, nisi, obcaecati similique aperiam voluptates architecto laborum accusantium eligendi?</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus nostrum id adipisci nemo iste animi facere expedita consequuntur doloribus. Saepe quibusdam quasi quisquam eos quis nulla cumque. Laboriosam doloremque expedita, voluptates soluta unde dolore aliquid harum incidunt ratione labore tempore sed et omnis ut neque exercitationem nihil itaque ex enim.</p>
            </div>
        </div>
     );
}
 
export default About;