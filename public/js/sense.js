const sections = document.querySelector("section");

const see = document.querySelector(".nav-tag span:first-child");
const hear = document.querySelector(".nav-tag span:nth-child(2)");
const touch = document.querySelector(".nav-tag span:nth-child(3)");
const smell = document.querySelector(".nav-tag span:nth-child(4)");
const taste = document.querySelector(".nav-tag span:nth-child(5)");
const intuition = document.querySelector(".nav-tag span:last-child");

let index = 0;

see.addEventListener('click', () => {
    window.alert('see');
})

hear.addEventListener('click', () => {
    index++;
    sections.foreach((section,i) => {
        if (i == index) {
            section.scrollIntoView({behavior: 'smooth'});
        }
    })
})

touch.addEventListener('click', () => {
    window.alert('touch');
})

smell.addEventListener('click', () => {
    window.alert('smell');
})

taste.addEventListener('click', () => {
    window.alert('taste');
})

intuition.addEventListener('click', () => {
    window.alert('intuition');
})