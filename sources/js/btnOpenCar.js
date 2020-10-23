const shoppingcart = document.getElementById("shopping-cart-div");
const closetag = document.getElementById("closetag");

shoppingcart.addEventListener("click", () => {
  document.getElementById("shopping-cart-details").style.width = "370px";
});

closetag.addEventListener("click", () => {
  document.getElementById("shopping-cart-details").style.width = "0px";
});



