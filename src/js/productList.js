import { renderListWithTemplate } from "./utils.js";

export default class ProductList{

      constructor(category,dataSource, listElement) {
        this.category = category;
        this.dataSource = dataSource;
        this.listElement = listElement;
    }

    async init(){
        const list = await this.dataSource.getData();
        const filteredList = [];
            list.map(tent => {
            if (tent.Id == "880RR" || tent.Id == "985RF" || tent.Id == "985PR" || tent.Id == "344YJ") {
                filteredList.push(tent);
            }
        })
        // console.log(list);
        this.renderList(filteredList);

    }

    prepareTemplate(template, product) {
        console.log(template);
        template.querySelector('a').href += product.Id;
        template.querySelector('img').src = product.Image;
        template.querySelector('img').alt += product.Name;
        template.querySelector('.card__brand').textContent = product.Brand.Name;
        template.querySelector('.card__name').textContent = product.NameWithoutBrand;
        template.querySelector('.product-card__price').textContent += product.FinalPrice;
        return template;
    }

    renderList(list) {
        this.listElement.innerHTML = '';
        const template = document.getElementById('product-card-template');
        renderListWithTemplate(template, this.listElement, list, this.prepareTemplate);
    }
};


