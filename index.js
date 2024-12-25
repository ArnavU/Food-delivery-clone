import cardData from './mock_main_menu_cards.js'; 

const cardContainer = document.getElementById("card-container");


cardData.forEach((data) => {
    const card = createCard(data);
    cardContainer.appendChild(card);
});

function createCard(data) {
	const card = document.createElement("div");

	card.innerHTML = `
                <div class="card">
                  <img src="${data.image}" class="card-image" alt="${data.title}"> 

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
                      <button class="card-add-btn">
                        <span class="card-add-icon"></span> 
                      </button>
                    </div>
                  </div>
                </div>
            `;

	return card;
}
