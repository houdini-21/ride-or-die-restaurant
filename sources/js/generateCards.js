const generateCards = (data) => {
  let listdata = data.include;
  const template = `
            <div class="card-scafold-combos">
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
                <ul id="list-include">
                ${listdata.map((li) => createList(li)).join(" ")}
                </ul>
                <button class="card-btn-add-car">Agregar al carrito</button>
              </div>
            </div>
    `;
  document
    .getElementById("box-combos")
    .insertAdjacentHTML("beforeend", template);
};

const createList = (data) => {
  const list = `<li class='card-description-include'>${data}</li>`;
  return list;
};

const generateCardsMenu = (data) => {
  const cardmenu = `
        <div class="card-scafold">
          <div class="card-picture">
            <img class="img-card" src="${data._img}" />
            <div class="card-price">
              <p class="card-price-p">
                $${data._price}
              </p>
            </div>
          </div>
          <div class="card-info">
            <h4 class="card-title">${data._title}</h4>
            <p class="card-description">
            ${data._description}
            </p>
            <button class="card-btn-add-car" id='${data._id}'>Agregar al carrito</button>
          </div>
        </div>
    `;
  document.getElementById("box-menu").insertAdjacentHTML("beforeend", cardmenu);
};

export { generateCards, generateCardsMenu };
