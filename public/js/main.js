// Menu Button 
const menuButton = document.querySelector("#open-menu");
// Navigation
const nav = document.querySelector("#nav");
// Menu Closed
let menuOpen = false;
// Total wrapper div
const totalWrapperDiv = document.querySelector("#total-wrapper");

// Menu Button Click
menuButton.addEventListener('click', ()=> {
    if(!menuOpen){
        menuButton.classList.add('open');
        nav.classList.add('visible');
        totalWrapperDiv.classList.add('open');
        menuOpen = true;
    } else {
        menuButton.classList.remove('open');
        nav.classList.remove('visible');
        totalWrapperDiv.classList.remove('open');
        menuOpen = false;
    }
});

