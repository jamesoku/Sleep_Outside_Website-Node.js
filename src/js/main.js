import ExternalServices from "./ExternalServices.js";
import ProductList from "./productList.js";
import { loadHeaderFooter } from "./utils.js";
loadHeaderFooter();

var pop_up = document.getElementById("pop-up");
document.querySelectorAll(".button").forEach(item => {
    item.addEventListener("click", event => {
    pop_up.classList.toggle("message");
   })
})

const dataSource = new ExternalServices("tents");

const listElement = document.querySelector(".product-list");



// what does new do //

// const productList = new ProductList('tents', dataSource, listElement);
// productList.init();
