import ProductData from "./productData.js";
import ProductList from "./productList.js";
import { loadHeaderFooter, getParam} from "./utils.js";

loadHeaderFooter();

// const dataSource = new ProductData('tents');

// const listElement = document.querySelector('.product-list');

// what does new do //
const category = getParam('category');
// first create an instance of our ProductData class.
const dataSource = new ProductData();
// then get the element we want the product list to render in
const listElement = document.querySelector('.product-list');
// then create an instance of our ProductList class and send it the correct information.
const productList = new ProductList(category, dataSource, listElement);
productList.init();