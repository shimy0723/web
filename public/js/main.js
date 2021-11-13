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

// Contact page capcha output
const capcha_output = document.querySelector("#capt");
// Capcha re-do button
const capcha_redo_btn = document.querySelector("#capt_btn");
// Capcha check button
const capcha_check_btn = document.querySelector("#capt_btn_check");
// Capcha result button
const capcha_reult_btn = document.querySelector("#capt_btn_result");
// Capcha verified
let capcha_verified = false;
// Capcha code 
let capcha_code = '';

// Generates a capcha
generate_capcha()

// Generates a new capcha when clicked
capcha_redo_btn.addEventListener('click', ()=> {
    generate_capcha()
    capcha_reult_btn.style.opacity = 0;
});

// Generate a capcha
function generate_capcha() {
    let txt = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let code = "";
    for (let i = 0; i <= 5; i++) {
        code += txt.charAt(Math.floor(Math.random() * 63));        
    }
    capcha_output.innerHTML = code;
    capcha_code = code;
}

// Checks if capcha code is identical
capcha_check_btn.addEventListener('click', ()=> {   
    // Capcha code input
    let capcha_input = document.querySelector("#capt_code").value;    

    if(capcha_input == capcha_code){        
        capcha_reult_btn.style.opacity = 1;     
        capcha_reult_btn.innerHTML = `<i class="fas fa-thumbs-up"></i>`;        
        capcha_reult_btn.style.color = "green"; 
        window.alert('CONGRATUATION! IT SEEMS LIKE YOU ARE NOT A ROBOT');
        capcha_verified = true;
    }
    else {
        capcha_reult_btn.style.opacity = 1;
        capcha_reult_btn.innerHTML = `<i class="fas fa-thumbs-down"></i>`;        
        capcha_reult_btn.style.color = "red";
        window.alert('OOPS! IT SEEMS LIKE YOU ARE A ROBOT');
    }
});

// Form
const contact_form = document.querySelector("#contact_form");
// Submit button
const submit_btn = document.querySelector(".form_btn");
// Success Div
const success_div = document.querySelector(".success");

contact_form.addEventListener('submit', (e) =>{
    e.preventDefault();    
    if(capcha_verified) {
        setTimeout(()=> {
            success_div.classList.add('show');
            success_div.classList.add('alert');
            success_div.classList.remove('hide');
            setTimeout(()=> {
                success_div.classList.remove('show');
                success_div.classList.add('hide');
            }, 3000);
        }, 500);   
        setTimeout(() => {
            location.reload();
        }, 5000);
    }
    else {
        window.alert('SORRY ROBOTS CANNOT DRINK SOJU!')
        location.reload();
    }     
});
