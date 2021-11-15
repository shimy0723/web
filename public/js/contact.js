// This is js for the contact page:

// Capcha output
const capcha_output = document.querySelector("#capt");
// Capcha re-do button
const capcha_redo_btn = document.querySelector("#capt_btn");
// Capcha check button
const capcha_check_btn = document.querySelector("#capt_btn_check");
// Capcha result button
const capcha_reult_btn = document.querySelector("#capt_btn_result");
// Capcha code correct
let capcha_answered = false;
// Capcha verified
let capcha_verified = false;
// Capcha code 
let capcha_code = '';

// Generates a capcha
generate_capcha()

// Generates a new capcha when clicked the re-do button wihtin the contact form
capcha_redo_btn.addEventListener('click', ()=> {
    if(capcha_verified == false && capcha_answered == false){
        // Capcha input    
        let capcha_input = document.querySelector("#capt_code");

        generate_capcha()
        capcha_reult_btn.style.opacity = 0;
        capcha_input.value ="";
    }
});

// Generate a capcha for the contact form verification
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

    // If the user inputs a correct code a success pop-up message will show
    // And a green thumbs up icon will appear
    if(capcha_input == capcha_code){        
        capcha_reult_btn.style.opacity = 1;     
        capcha_reult_btn.innerHTML = `<i class="fas fa-thumbs-up"></i>`;        
        capcha_reult_btn.style.color = "green"; 
        window.alert('CONGRATUATION! IT SEEMS LIKE YOU ARE NOT A ROBOT');
        capcha_verified = true;        
    }

    // Else a failure pop-up message will show
    // And a red thumbs down icon will appear
    else {
        capcha_reult_btn.style.opacity = 1;
        capcha_reult_btn.innerHTML = `<i class="fas fa-thumbs-down"></i>`;        
        capcha_reult_btn.style.color = "red";
        window.alert('OOPS! IT SEEMS LIKE YOU ARE A ROBOT');
        capcha_verified = false;        
    }
});

// Form
const contact_form = document.querySelector("#contact_form");
// Submit button
const submit_btn = document.querySelector(".form_btn");
// Success Div
const success_div = document.querySelector(".success");

// If the contact form is submitted with the capcha verified, a green confirmation dev will appear from the right bottom of the contact page.
// The page will be reloaded after 3 seconds.
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
            }, 1000);
        }, 300);   
        setTimeout(() => {
            location.reload();
        }, 3000);
    }
    // If the form is submitted without the capcha veriefed a failure pop-up message will show and the form will be reloaded.
    else {
        window.alert('SORRY ROBOTS CANNOT DRINK SOJU!');
        location.reload();
    }     
});