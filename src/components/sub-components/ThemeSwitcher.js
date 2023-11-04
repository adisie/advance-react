
import {BiSolidMoon} from 'react-icons/bi';
import {BsFillSunFill} from 'react-icons/bs';
import ThemeStore from '../../stores/ThemeStore';

const ThemeSwitcher = () => {
    const {isLightTheme,themeSwitcher,light,dark} = ThemeStore();
    const theme = isLightTheme ? light : dark;
    return ( 
        <>
        <button onClick={themeSwitcher} style={{color: theme.hc,transition: "1s"}}>{isLightTheme ? <BiSolidMoon /> : <BsFillSunFill />}</button>
        </>
     );
}
 
export default ThemeSwitcher;