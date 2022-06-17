import ExternalServices from "./ExternalServices.js";
import ProductList from "./productList.js";
import { loadHeaderFooter } from "./utils.js";

loadHeaderFooter();

const dataSource = new ExternalServices("tents");

const listElement = document.querySelector(".product-list");

// what does new do //

// const productList = new ProductList('tents', dataSource, listElement);
// productList.init();
