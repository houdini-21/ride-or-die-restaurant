const generateCards = (data) => {
  const template = `
            <div class="card-scafold">
              <div class="card-picture">
                <img class="img-card" src="${data.img}" />
                <div class="card-price">
                  <p class="card-price-p">
                    $${data.price}
                  </p>
                </div>
              </div>
              <div class="card-info">
                <h4 class="card-title">${data.title}</h4>
                <p class="card-description">
                ${data.description}
                </p>
                <button class="card-btn-add-car">Agregar al carrito</button>
              </div>
            </div>
    `;

  document
    .getElementById("box-combos")
    .insertAdjacentHTML("beforeend", template);
};

export { generateCards };
