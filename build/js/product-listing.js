import ExternalServices from "./ExternalServices.js";
import ProductList from "./productList.js";
import { loadHeaderFooter, getParams } from "./utils.js";

loadHeaderFooter();

// const dataSource = new ProductData('tents');

// const listElement = document.querySelector('.product-list');

// what does new do //
const category = getParams("category");
console.log(category);
// first create an instance of our ProductData class.
const dataSource = new ExternalServices();
// then get the element we want the product list to render in
const listElement = document.querySelector(".product-list");
// then create an instance of our ProductList class and send it the correct information.
const productList = new ProductList(category, dataSource, listElement);
productList.init();
