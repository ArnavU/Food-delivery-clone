import cardData from "./mock_main_menu_cards.js";
import { createCard } from "./index.js";

const sliderContainer = document.getElementById('slider-container');
const slideWrapper = document.getElementById('slide-wrapper');
const widthOfSliderContainer = slideWrapper.offsetWidth;
console.log('totalWidth: ', widthOfSliderContainer)

// Add cards to slider container
cardData.forEach((data) => {
    const card = createCard(data);
    sliderContainer.appendChild(card);
});

// Left slide btn
const leftSlider = document.getElementById('left-slider');
const leftSliderPolygon = document.getElementById('left-slider-polygon');
const rightSlider = document.getElementById('right-slider');
const rightSliderPolygon = document.getElementById('right-slider-polygon');

let translate = 0;
let slideWidth = 344; // Adjust this to the width of your cards + gap
let totalWidth = (12*277 + 792); // single card + gaps || 277 + (11*72)
let slideWidthRemaining = totalWidth - widthOfSliderContainer;

rightSlider.addEventListener('click', () => {
    if(slideWidthRemaining <= 0) return;
    slideWidthRemaining -= slideWidth;

    translate = translate + slideWidth; 

    sliderContainer.style.transform = `translateX(${-translate}px)`;
});

leftSlider.addEventListener('click', () => {
    slideWidthRemaining += slideWidth;
    if(slideWidthRemaining > totalWidth - widthOfSliderContainer) {
        translate = 0;
    } else {
        translate = translate - slideWidth;
    }

    sliderContainer.style.transform = `translateX(${-translate}px)`;
});

leftSlider.addEventListener('mouseover', () => {
    if(translate==0) return;
    leftSliderPolygon.src = './assets/PolygonRightPoint.svg';
    leftSlider.style.backgroundColor = "#1AC073"
    leftSliderPolygon.style.transform = `rotate(180deg) `
})
leftSlider.addEventListener('mouseout', () => {
    leftSliderPolygon.src = './assets/PolygonLeftPoint.svg'
    leftSlider.style.backgroundColor = "white"
    leftSliderPolygon.style.transform = `translateX(0%)`
})

rightSlider.addEventListener('mouseover', () => {
    if((slideWidthRemaining <= 0)) {
        return;
    }
    rightSliderPolygon.src = './assets/PolygonRightPoint.svg';
    rightSlider.style.backgroundColor = "#1AC073"
    rightSliderPolygon.style.transform = `rotateX(180deg)`
})
rightSlider.addEventListener('mouseout', () => {
    rightSliderPolygon.src = './assets/PolygonLeftPoint.svg'
    rightSlider.style.backgroundColor = "white"
    rightSliderPolygon.style.transform = `rotate(180deg) translateX(-25%)`
})