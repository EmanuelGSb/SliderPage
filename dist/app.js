"use strict";
const slides = document.querySelectorAll('.slide');
const next = document.getElementById('next');
const prev = document.getElementById('prev');
let currentIndex = 0;
if (next && prev) {
    next.addEventListener('click', () => {
        changeSlide(currentIndex + 1);
    });
    prev.addEventListener('click', () => {
        changeSlide(currentIndex - 1);
    });
}
function changeSlide(index) {
    currentIndex = (index + slides.length) % slides.length;
    const slider = document.querySelector('.slider');
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}
// test
changeSlide(0);
