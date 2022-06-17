import { getParams } from "./utils"
import { loadHeaderFooter } from "./utils.js"
import { renderListWithTemplate } from "./utils.js"

loadHeaderFooter()
 

// fetch("http://157.201.228.93:2992/products/search/tents").then(data => data.json()).then(result => result.Result.map(item => tents.push(item)))

const param = getParams("search");
async function loadselect(){
    var we_need = [];
    const responsetents = await fetch("http://157.201.228.93:2992/products/search/tents");
    const responsebags = await fetch("http://157.201.228.93:2992/products/search/sleeping-bags");
    const responseham = await fetch("http://157.201.228.93:2992/products/search/backpacks");
    const responseBP = await fetch("http://157.201.228.93:2992/products/search/hammocks");

    const datatents = await responsetents.json();
    const databags = await responsebags.json();
    const dataham = await responseham.json();
    const dataBP = await responseBP.json();

   

    const everything = [...datatents.Result, ...databags.Result, ...dataham.Result, ...dataBP.Result];
    console.log(everything);


    var count = Object.keys(everything).length;
    var compare = param.toLowerCase();
    for (var i = 0; i < count; i++) {
      var name = everything[i].Name.toLowerCase();
      if(name.includes(compare)){
        we_need.push(everything[i]);
      
      }
    }

    return we_need;
} 



function prepareTemplate(template, product) {
  template.querySelector("a").href += product.Id;
  template.querySelector("img").src = product.Images.PrimaryMedium;
  template.querySelector("img").alt += product.Name;
  template.querySelector(".card__brand").textContent = product.Brand.Name;
  template.querySelector(".card__name").textContent =
    product.NameWithoutBrand;
  template.querySelector(".product__initialPrice").textContent +=
    product.SuggestedRetailPrice;
  template.querySelector(".product-card__price").textContent +=
    product.FinalPrice;
  return template;
}

function renderList(list) {
  const listElement = document.querySelector(".product-list")
  listElement.innerHTML = "";
  const template = document.getElementById("product-card-template");
  renderListWithTemplate(
    template,
    listElement,
    list,
    prepareTemplate
  )
}

async function displaySearch() {
  const we_need = await loadselect()
  console.log(we_need);
  renderList(we_need);
}

displaySearch()

// console.log(tents);
// while i > length()