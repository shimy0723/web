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

// Nav links will appear when the menu button is clicked
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

// Jokes output
const jokes = document.querySelectorAll(".joke");

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

// GIF API_KEY
const GIF_API_KEY = "TbRP6TwW7tDXpTkFEeA2FLGO5lN4IIHD"
// Logo Image
const logo = document.querySelector(".secret_logo");
// Changes the main logo with a scret logo
function fetchGifs() {
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=${GIF_API_KEY}&q=rick?astly&limit=1&offset=0&rating=g&lang=en`)
    .then(res => res.json())
    .then(data => {
        const gif = data.data[0].images.downsized.url;
        logo.src = `${gif}`
    });
}

// Secret button
const secret_btn = document.querySelector("#secret_btn");
// 
secret_btn.addEventListener('click', () =>{
    const jokes = document.querySelectorAll(".joke");
    window.alert("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@(SIREN NOISE) WARNING! YOU'VE JUST ACTIVATED THE SECRET MODE!!! GUESS WHAT HAPPENED :')@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
    // Executes fetchJokes function    
    fetchJokes();
    fetchGifs();
});