import cardData from "./mock_main_menu_cards.js";

const cardContainer = document.getElementById("card-container");

cardData.forEach((data) => {
	const card = createCard(data);
	cardContainer.appendChild(card);
});

export function createCard(data) {
    let counter = 0;
	const card = document.createElement("div");

	card.innerHTML = `
                <div class="card"> 
                    <img src="${data.image}" class="card-image" alt="${data.title}"> 
                  
                    ${data.discount
						? `<div class="card-discount">${data.discount}</div>`
						: ""
					}

                    <div class="card-content">
                        <div class="card-title-price">
                            <p class="card-title">${data.title}</p>
                            <p class="card-price">&#8377; ${data.price}</p>
                        </div>
                        <div class="card-rating-time-add">
                            <div class="card-rating-time">
                                <div class="card-rating">
                                    <img src="./assets/star.png" alt="Rating" class="card-star-icon">
                                    <p class="card-rating-value">${data.ragings}</p>
                                </div>
                                <div class="card-time">
                                    <p class="card-time-value">${data.time} min</p>
                                </div>
                            </div>
                            <div class="card-minus-add-btn">
                                <button class="card-minus-btn custom-hidden">
                                    <span class="card-minus-icon"></span>
                                </button>
                                <div class="card-counter custom-hidden">${counter}</div>
                                <button class="card-add-btn card-add-btn-left-radius">
                                    <span class="card-add-icon"></span> 
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            `;

    const addBtn = card.querySelector(".card-add-btn");
    const minusBtn = card.querySelector(".card-minus-btn");
    const counterBtn = card.querySelector(".card-counter");

    addBtn.addEventListener("click", () => {
        counter++;
        counterBtn.textContent = counter;
        minusBtn.classList.remove("custom-hidden");
        counterBtn.classList.remove("custom-hidden");
        addBtn.classList.remove("card-add-btn-left-radius");
    });

    minusBtn.addEventListener("click", () => {
        counter--;
        counterBtn.textContent = counter;
        if (counter === 0) {
            minusBtn.classList.add("custom-hidden");
            counterBtn.classList.add("custom-hidden");
            addBtn.classList.add("card-add-btn-left-radius");
        }
    });

	return card;
}



// ***************************** code for slider ************************************
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



// *********CART MODAL*********

// Get the modal
var modal = document.getElementById("myModal");
  
// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal (replace with your actual button ID)
// var btn = document.getElementById("myBtn"); 

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Get the "Back to Menu" button
var menuButton = document.querySelector(".menuButton"); 

// When the user clicks the button, open the modal (if you have a button to open it)
// btn.onclick = function() {
//   modal.style.display = "block";
// }

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks the "Back to Menu" button, close the modal
menuButton.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


// *********request Dish*********

// In your index.js

// ... (your existing JavaScript code) ...

// Get the "Request a Dish" modal
var requestDishModal = document.getElementById("requestDishModal");

// Get the "Request a Dish" button
var requestDishBtn = document.getElementById("requestDishBtn");

// Get the <span> element that closes the "Request a Dish" modal
var requestDishClose = requestDishModal.querySelector(".close"); 

// Get the "Cancel" button in the "Request a Dish" modal
var cancelBtn = requestDishModal.querySelector(".cancelBtn");

// When the user clicks the "Request a Dish" button, open the modal
requestDishBtn.onclick = function() {
  requestDishModal.style.display = "block";
}

// When the user clicks on <span> (x), close the "Request a Dish" modal
requestDishClose.onclick = function() {
  requestDishModal.style.display = "none";
}

// When the user clicks the "Cancel" button, close the "Request a Dish" modal
cancelBtn.onclick = function() {
  requestDishModal.style.display = "none";
}

// When the user clicks anywhere outside of the "Request a Dish" modal, close it
// window.onclick = function(event) {
//   if (event.target == requestDishModal) {
//     requestDishModal.style.display = "none";
//   }
// }



// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
    if (event.target == requestDishModal) { // Added condition for the new modal
      requestDishModal.style.display = "none";
    }
  }

// *****************