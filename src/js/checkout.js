import { loadHeaderFooter } from "./utils.js";
import CheckoutProcess from "./checkoutProcess.js";

loadHeaderFooter();

const myCheckout = new CheckoutProcess("so-cart", ".checkout-summary");
myCheckout.init();

document
  .querySelector("#zip")
  .addEventListener("blur", myCheckout.calculateOrderTotal.bind(myCheckout));

//listening or click on the button
document.querySelector("#checkoutSubmit").addEventListener("click", (e) => {
  e.preventDefault();
  var myForm = document.forms[0];
  var chk_status = myForm.checkValidity();
  myForm.reportValidity();
  if (chk_status) myCheckout.checkout();
  window.location.href = "http://localhost:8080/checkout/checkedout.html";
  window.localStorage.clear();
});
