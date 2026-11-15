const latitude = 53.9022;
const longitude = 27.5618;
let zoom = 10;

const mediaQuery1 = window.matchMedia('(min-width: 500px)');
const mediaQuery2 = window.matchMedia('(min-width: 992px)');

// Проверить прямо сейчас (true / false)
if (mediaQuery1.matches) {
    zoom = 11;
}

if (mediaQuery2.matches) {
    zoom = 12;
}


var map = L.map('map', {
    attributionControl: false
}).setView([latitude, longitude], zoom);

L.control.attribution({
    prefix: "Проект \"6 \"Г\" помнит!\""
}).addTo(map);


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://openstreetmap.org/copyright/">OpenStreetMap</a> contributors'
}).addTo(map);