import ThemeStore from "../stores/ThemeStore";

const Home = () => {

    const {isLightTheme,themeSwitcher,light,dark} = ThemeStore();
    const theme = isLightTheme ? light : dark;

    return ( 
        <div className="home-content" style={{background: theme.bbg,transition:"1s"}}>
            <div className="content" >
                <h3 style={{color: theme.blc,transition:"1s"}}>Hello There !!!</h3>
                <h1 style={{color: theme.blc,transition:"1s"}}>I am Haddis</h1>
                <h3 style={{color: theme.blc,transition:"1s"}}>This is my first Blog Site App</h3>
                <p style={{color: theme.blc,transition:"1s"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error nostrum assumenda deserunt eos neque dolore, dolores distinctio aliquam provident labore incidunt eum adipisci consequatur eligendi, expedita enim velit excepturi! Quae libero beatae reprehenderit iste, dolore odio magni.</p>
                <div className="button-container">
                    <button style={{borderColor:theme.hc,transition: "1s" ,color: theme.hc}}><span></span>Watch More</button>
                    <button style={{borderColor:theme.hc,transition: "1s",color: theme.hc}}><span></span>Support Me</button>
                </div>
            </div>
        </div>
     );
}
 
export default Home;