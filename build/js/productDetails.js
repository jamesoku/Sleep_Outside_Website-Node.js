var a=(c,t,o)=>new Promise((e,s)=>{var u=d=>{try{r(o.next(d))}catch(i){s(i)}},l=d=>{try{r(o.throw(d))}catch(i){s(i)}},r=d=>d.done?e(d.value):Promise.resolve(d.value).then(u,l);r((o=o.apply(c,t)).next())});import{setLocalStorage as p,getLocalStorage as n}from"./utils.js";export default class h{constructor(t,o){this.productId=t,this.product={},this.dataSource=o}init(){return a(this,null,function*(){console.log(this.dataSource),this.product=yield this.dataSource.findProductById(this.productId),console.log(this.product),document.querySelector("main").innerHTML=this.renderProductDetails(),document.getElementById("addToCart").addEventListener("click",this.addToCart.bind(this))})}addToCart(){let t=n("so-cart");t||(t=[]),t.push(this.product),p("so-cart",t)}renderProductDetails(){return`<section class="product-detail"> <h3>${this.product.Brand.Name}</h3>
        <h2 class="divider">${this.product.NameWithoutBrand}</h2>
        <img
          class="divider"
          src="${this.product.Image}"
          alt="${this.product.NameWithoutBrand}"
        />
        <p class="product-card__price">$${this.product.FinalPrice}</p>
        <p class="product__color">${this.product.Colors[0].ColorName}</p>
        <p class="product__description">
        ${this.product.DescriptionHtmlSimple}
        </p>
        <div class="product-detail__add">
          <button id="addToCart" data-id="${this.product.Id}">Add to Cart</button>
        </div></section>`}}
