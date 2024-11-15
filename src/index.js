
import "./styles.css";

import { homePage } from './home.js'; 
import { aboutPage } from "./about.js";
import { menuPage } from "./menus.js";


homePage();

document.addEventListener("DOMContentLoaded", () => {



    const homeButton = document.querySelector('nav button:nth-child(1)');
    const menuButton = document.querySelector('nav button:nth-child(2)');
    const aboutButton = document.querySelector('nav button:nth-child(3)');



    homeButton.addEventListener("click", homePage);
    menuButton.addEventListener("click", menuPage);
    aboutButton.addEventListener("click", aboutPage);

});