import { create } from "zustand";

const ThemeStore = create((set)=>({
    isLightTheme: true,
    light: {hbg:'rgb(162, 162, 162)',bbg:'rgb(209, 205, 205)',hc:'rgb(23, 23, 23)',blc:'rgb(15, 14, 14)'},
    dark: {hbg:'rgb(15, 14, 14)',bbg:'rgb(27, 27, 27)',hc:'rgb(182, 182, 182)',blc:'rgb(227, 225, 225)'},
    themeSwitcher: ()=>set((state)=>({
        isLightTheme: !state.isLightTheme
    })),
}));


export default ThemeStore;