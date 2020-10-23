const generateCards = (data) => {
  let listdata = data._include;
  const template = `
            <div class="card-scafold-combos">
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
                <ul id="list-include">
                ${listdata.map((li) => createList(li)).join(" ")}
                </ul>
                <button class="card-btn-add-car" id='${
                  data._id
                }'>Agregar al carrito</button>
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

const generateCardsforShoppingCart = (data) => {
  const template = `
              <div class="card-details-shopping-cart">
                <div class="card-details-img">
                  <img
                    class="img-details"
                    src="${data._img}"
                    alt=""
                  />
                </div>
                <div class="class-price-title">
                  <div class="card-detail-order">
                    <h4 class="card-details-title">
                    ${data._title}
                    </h4>
                    <div class="card-details-quantity">
                      <button type="button" class="card-detail-btn-minus">
                        -
                      </button>
                      <input
                        class="quantity-dish"
                        value="0"
                        type="text"
                        disabled="disabled"
                      />
                      <button type="button" class="card-detail-btn-add">
                        +
                      </button>
                    </div>
                  </div>
                  <h4 class="card-details-price">
                  $${data._price}
                  </h4>
                </div>
              </div>`;
  document
    .getElementById("container-dish")
    .insertAdjacentHTML("beforeend", template);
};

export { generateCards, generateCardsMenu, generateCardsforShoppingCart };
