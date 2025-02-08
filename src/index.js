import "./styles.css";
import { home } from "./home.js";
import { menu } from "./menu.js";
import { about } from "./about.js";
home()
const nav = document.querySelector("nav");
const content = document.getElementById("content");
nav.addEventListener("click", (e) => {
    if (e.target.classList.contains("menu")) {
        content.innerHTML = '';
        menu();
    } else if (e.target.classList.contains("about")) {
        content.innerHTML = '';
        about();
    } else {
        content.innerHTML = '';
        home();
    }
});