// --------------------- Homework -------------------

let samalyot = 500;
let mehmonxona = 250;
let aylanish = 120;

let userName = prompt('Ismingizni kiriting');
let userCash = prompt('Necha pul sarflamoqchisiz?(sum da)');

let samalyotTotal = 500 * 12168;
let mehmonxonaTotal = 250 * 12168;
let aylanishTotal = 120 * 12968;
let total = samalyotTotal + mehmonxonaTotal + aylanishTotal;

let elName = document.querySelector('.name');
let elAnswer = document.querySelector('.answer');

elName.textContent = userName;
if (userCash >= total) {
    elAnswer.textContent = 'Oq yo`l';
}
else {
    elAnswer.textContent = 'ozgina sabr qilishiz kk ekan';
}