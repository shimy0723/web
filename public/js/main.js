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



// Contact Page Capcha Output
const capcha_output = document.querySelector("#capt");
// Re-do button
const capcha_btn = document.querySelector("#capt_btn");
// Generate a capcha
function generate_capcha() {
    let txt = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let code = "";
    for (let i = 0; i <= 7; i++) {
        code += txt.charAt(Math.floor(Math.random() * 63));        
    }
    capcha_output.innerHTML = code;
}
// Generates a capcha
generate_capcha()

// Generates a new capcha when clicked
capcha_btn.addEventListener('click', ()=> {
    generate_capcha()
});

// Form
const contact_form = document.querySelector("#contact_form");
// Submit button
const submit_btn = document.querySelector(".form_btn");
// Close button
const close_btn = document.querySelector(".success_close");
// Success Div
const success_div = document.querySelector(".success");

contact_form.addEventListener('click', () =>{
    success_div.classList.add('show');
    // success_div.classList.add('alert');
    // success_div.classList.remove('hide');
});

submit_btn.addEventListener('click', () =>{
    success_div.classList.remove('show');
    success_div.classList.add('hide');
});

