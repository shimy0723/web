// GIF API_KEY
const GIF_API_KEY = "TbRP6TwW7tDXpTkFEeA2FLGO5lN4IIHD"
// Menu button 
const menuButton = document.querySelector("#open-menu");
// Navigation
const nav = document.querySelector("#nav");
// Logo link 
const logo = document.querySelector(".logo");
// Total wrapper div
const totalWrapperDiv = document.querySelector("#total-wrapper");
// Condition of use link
const condition = document.querySelector("#condition-of-use-link");
// Signature div
const signature = document.querySelector("#signature");
// Navigation links
// Home link
const home_link = document.querySelector(".home_link");
// Product link
const product_link = document.querySelector(".product_link");
// Mixology link
const mixology_link = document.querySelector(".mixology_link");
// Crafting link
const crafting_link = document.querySelector(".crafting_link");
// Sense link
const sense_link = document.querySelector(".sense_link");
// Contact link
const contact_link = document.querySelector(".contact_link");
// Menu Closed
let menuOpen = false;
// Logo Image
const secret_logo = document.querySelector(".secret_logo");
// Jokes output
const jokes = document.querySelectorAll(".joke");
// Total wrapper click after nav button animation
const total_wrapper = document.querySelector("#total-wrapper");
// Secret button
const secret_btn = document.querySelector("#secret_btn");

// Nav links will appear when the menu button is clicked
menuButton.addEventListener('click', ()=> {
    menuButton.classList.toggle('opened');
    nav.classList.toggle('visible');
    totalWrapperDiv.classList.toggle('opened');
    condition.classList.toggle('opened');
    signature.classList.toggle('opened'); 
    firstClick.toggle('true'); 
});

// Closes total wrapper animation, sets navigation visible to none
function closeWrapper() {
    menuButton.classList.remove('opened');
    nav.classList.remove('visible');
    totalWrapperDiv.classList.remove('opened');
    condition.classList.remove('opened');
    signature.classList.remove('opened');    
    menuOpen = false;    
}

// Navigation logo link click
logo.addEventListener('click', () => {    
    setTimeout(() => {  window.location.href = "/"  }, 0);   
});

// Navigation home link click
home_link.addEventListener('click', () => {
    closeWrapper();
    setTimeout(() => {  window.location.href = "/"  }, 1000);   
});

// Navigation product link click
product_link.addEventListener('click', () => {
    closeWrapper();
    setTimeout(() => {  window.location.href = "/product"  }, 1000);   
});

// Navigation mixology link click
mixology_link.addEventListener('click', () => {
    closeWrapper();
    setTimeout(() => {  window.location.href = "/mixology"  }, 1000);   
});

// Navigation crafting link click
crafting_link.addEventListener('click', () => {
    closeWrapper();
    setTimeout(() => {  window.location.href = "/crafting"  }, 1000);   
});

// Navigation sense link click
sense_link.addEventListener('click', () => {
    closeWrapper();
    setTimeout(() => {  window.location.href = "/sense"  }, 1000);   
});

// Navigation contact link click
contact_link.addEventListener('click', () => {
    closeWrapper();
    setTimeout(() => {  window.location.href = "/contact"  }, 1000);   
});

// Closes the total wrapper animation when clicked
total_wrapper.addEventListener('click', ()=> {
    closeWrapper();
});

// Fetches 14 jokes about chucknorris and and prints them into every element with a class of .joke randomly
function fetchJokes() {
    jokes.forEach(j => {
        // Random num between 1-14
        const num = Math.floor(Math.random() * 14) + 1;
        fetch("https://api.chucknorris.io/jokes/search?query=alcohol")
        .then(res => res.json())
        .then(data => {
            const joke = data.result[num].value;  
            j.innerHTML =`${joke}`;
        });
    });
}

// Changes the main logo with a scret logo
function fetchGifs() {
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=${GIF_API_KEY}&q=chuck?norris&limit=1&offset=0&rating=g&lang=en`)
    .then(res => res.json())
    .then(data => {
        const gif = data.data[0].images.downsized.url;
        secret_logo.src = `${gif}`
    });
}

// Chuck Norris secret mode
secret_btn.addEventListener('click', () =>{
    // const jokes = document.querySelectorAll(".joke");
    window.alert("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@(SIREN NOISE) WARNING! YOU'VE JUST ACTIVATED THE SECRET MODE!!! GUESS WHAT HAPPENED :')@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
    // Executes fetchJokes function    
    fetchJokes();
    fetchGifs();
});