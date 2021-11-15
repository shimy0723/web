// API_KEY
const API_KEY = "W1sRgUiSUi4fNh03DnMn6B8gXmmk-R2mF_j01W8Cct4"

// Mix button
const mix_btn = document.querySelectorAll(".mix-btn a");
// Mix image
const mix_img = document.querySelectorAll(".mix-img");

function fetchData() {
    fetch(`https://api.unsplash.com/search/photos?query=drink&per_page=10&orientation=portrait&client_id=${API_KEY}`)
    .then(res => res.json())
    .then(data => {
        mix_img.forEach(img => {
            const num = Math.floor(Math.random() * 10) + 1;
            img.style.background = `url("${data.results[num].urls.regular}") no-repeat center center/contain`;
        });
    });
}

fetchData();

mix_btn.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        fetchData();
    })
});