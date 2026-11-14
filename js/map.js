const latitude = 53.9022;
const longitude = 27.5618;
let zoom = 11;

const mediaQuery = window.matchMedia('(min-width: 992px)');

// Проверить прямо сейчас (true / false)
if (mediaQuery.matches) {
  zoom = 12;
} 



// 2. Инициализируем карту. [53.90, 27.56] — это координаты центра Минска. 12 — масштаб (zoom)
var map = L.map('map', {
    attributionControl: false
}).setView([latitude, longitude], zoom);

L.control.attribution({
    prefix: "Проект \"6 \"Г\" помнит!\""
}).addTo(map);

// 3. Подключаем легальный слой карт OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://openstreetmap.org/copyright/">OpenStreetMap</a> contributors'
}).addTo(map);