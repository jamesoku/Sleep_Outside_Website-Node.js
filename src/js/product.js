import ExternalServices from "./ExternalServices";
import ProductDetails from "./productDetails.js";
import { getParams } from "./utils.js";

// console.log("hello");
const productId = getParams("product");
const dataSource = new ExternalServices();
console.log(dataSource);

const product = new ProductDetails(productId, dataSource);
product.init();
