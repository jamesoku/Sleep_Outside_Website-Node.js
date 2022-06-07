import{loadHeaderFooter as n,setLocalStorage as i}from"./utils.js";n();function o(t){return JSON.parse(localStorage.getItem(t))}function l(){let t="";const e=o("so-cart"),r=e.map(a=>d(a));if(document.querySelector(".product-list").innerHTML=r.join(""),e){let a=0;for(let c=0;c<e.length;c++){const s=e[c];a+=s.FinalPrice}a=a.toFixed(2),document.querySelector(".cart-footer-hide").innerHTML=`<p class="cart-total">Total: ${a} </p>'`}}function d(t){const e=`<li class="cart-card divider">
  <a href="#" class="cart-card__image">
    <img
      src="${t.Image}"
      alt="${t.Name}"
    />
  </a>
  <a href="#">
    <h2 class="card__name">${t.Name}</h2>
  </a>
  <p class="cart-card__color">${t.Colors[0].ColorName}</p>
  <p class="cart-card__quantity">qty: 1</p>
  <p class="cart-card__price">$${t.FinalPrice}</p>
  <p class="remove-icon" data-id = "${t.Id}">\u274C</p>
</li>`;return e}l(),document.querySelectorAll(".remove-icon").forEach(t=>{t.addEventListener("click",function(){const e=o("so-cart");for(let r=0;r<e.length;r++){const a=e[r];this.dataset.id==a.Id&&e.splice(r)}i("so-cart",e),l()})});
