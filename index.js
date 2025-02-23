// din fisierul index.js va pleca toata functionalitatea noastra
// vom seta ca orasul curent sa fie mereu Bucuresti
const currentCityTag = document.querySelector('.current-city');
let currentCity = localStorage.getItem("city");
console.log(currentCity);
// Daca nu avem oras salvat in localStorage, salvam orasul default, adica Bucuresti.
if (!currentCity) {
    localStorage.setItem("city", "București");
    currentCity = "București";
  }
// actualizam tag-ul pentru orasul curent sa aiba valoarea Bucuresti
currentCityTag.innerHTML = currentCity;
// Afisam vremea curenta si predictia pe 5 zile.
displayCurrentWeather(currentCity);
displayWeatherForecast(currentCity);
// Selectăm butonul
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Detectăm când utilizatorul face scroll
window.onscroll = function() {
    if (document.body.scrollTop > window.innerHeight / 2 || document.documentElement.scrollTop > window.innerHeight / 2) {
        // Afișăm butonul când scroll-ul depășește jumătatea viewport-ului
        scrollToTopBtn.style.display = "block";
    } else {
        // Ascundem butonul dacă scroll-ul este mai mic de jumătate din viewport
        scrollToTopBtn.style.display = "none";
    }
};

// Funcționalitatea de "scroll to top" atunci când se apasă pe buton
scrollToTopBtn.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};