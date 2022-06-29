import { loadHeaderFooter, setLocalStorage } from "./utils.js";
// import CartList from "./cartList.js";

loadHeaderFooter();

// const cart = new CartList("so-cart", document.querySelector(".product-list"));
// cart.init();

// if (cart.total > 0) {
//   document.querySelector(".list-footer").classList.remove("hide");
// }
function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

function getCartContents() {
  let markup = "";
  const cartItems = getLocalStorage("so-cart");
  if (cartItems) {
    const htmlItems = cartItems.map((item) => renderCartItem(item));
    document.querySelector(".product-list").innerHTML = htmlItems.join("");
  }
  if (cartItems) {
    let total = 0;
    // console.log(cartItems);
    // for (let item in cartItems) {
    //   console.log(item);
    //   // total += item.FinalPrice;
    // }
    for (let item = 0; item < cartItems.length; item++) {
      const product = cartItems[item];

      total += product.FinalPrice;
    }
    total = total.toFixed(2);
    document.querySelector(
      ".cart-footer-hide"
    ).innerHTML = `<p class="cart-total">Total: ${total} </p>`;
  }
  // document.querySelector(".product-list").innerHTML = renderCartItem(cartItems);
}

function renderCartItem(item) {
  const newItem = `<li class="cart-card divider">
  <a href="#" class="cart-card__image">
    <img
      src="${item.Images.PrimarySmall}"
      alt="${item.Name}"
    />
  </a>
  <a href="#">
    <h2 class="card__name">${item.Name}</h2>
  </a>
  <p class="cart-card__color">${item.Colors[0].ColorName}</p>
  <p class="cart-card__quantity">qty: 1</p>
  <p class="cart-card__price">$${item.FinalPrice}</p>
  <p class="remove-icon" data-id = "${item.Id}">❌</p>
</li>`;
  return newItem;
}

getCartContents();

document.querySelectorAll(".remove-icon").forEach((item) => {
  item.addEventListener("click", function () {
    const cartItems = getLocalStorage("so-cart");
    for (let cartItem = 0; cartItem < cartItems.length; cartItem++) {
      const item = cartItems[cartItem];
      if (this.dataset.id == item.Id) {
        cartItems.splice(cartItem);
      }
    }
    setLocalStorage("so-cart", cartItems);
    getCartContents();
  });
});
