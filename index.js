import cardData from "./mock_main_menu_cards.js";

const cardContainer = document.getElementById("card-container");

cardData.forEach((data) => {
	const card = createCard(data);
	cardContainer.appendChild(card);
});

function createCard(data) {
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
