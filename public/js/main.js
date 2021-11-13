// Menu button 
const menuButton = document.querySelector("#open-menu");
// Navigation
const nav = document.querySelector("#nav");
// Total wrapper div
const totalWrapperDiv = document.querySelector("#total-wrapper");
// Condition of use link
const condition = document.querySelector("#condition-of-use-link");
// Signature div
const signature = document.querySelector("#signature");

// Menu Closed
let menuOpen = false;
// Menu Button Click
menuButton.addEventListener('click', ()=> {
    /*
    if(!menuOpen){        
        menuButton.classList.add('opened');
        nav.classList.add('visible');
        totalWrapperDiv.classList.add('opened');
        condition.classList.add('opened');
        signature.classList.add('opened');   
        menuOpen = true;    
    } else {        
        menuButton.classList.remove('opened');
        nav.classList.remove('visible');
        totalWrapperDiv.classList.remove('opened');
        condition.classList.remove('opened');
        signature.classList.remove('opened');    
        menuOpen = false;    
    }    */
    menuButton.classList.toggle('opened');
    nav.classList.toggle('visible');
    totalWrapperDiv.classList.toggle('opened');
    condition.classList.toggle('opened');
    signature.classList.toggle('opened'); 
});