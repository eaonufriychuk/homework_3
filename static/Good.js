'use strict';

class Good {
    constructor(id, title, price) {
        this.id = id;
        this.title = title;
        this.price = price;
    }

    render(container) {
        const wrapper = document.createElement('div');
        const good = document.createElement('div');
        const header = document.createElement('div');
        const headerTitle = document.createElement('h4');
        const body = document.createElement('div');
        const bodyText = document.createElement('p');
        const buttonGroup = document.createElement('div');
        const button = document.createElement('button');

        wrapper.classList.add('col-4');
        good.classList.add('card');
        header.classList.add('card-header');
        headerTitle.classList.add('title');
        body.classList.add('card-body');
        buttonGroup.classList.add('button-group');
        button.classList.add('btn');
        button.classList.add('btn-primary');

        wrapper.id = `${this.id+1}`;
        headerTitle.textContent = `${this.id+1}. ${this.title}`;
        bodyText.textContent = `Price: ${this.price}$`;
        button.textContent = 'Add to cart';

        buttonGroup.appendChild(button);
        bodyText.appendChild(buttonGroup);
        body.appendChild(bodyText);
        good.appendChild(header);
        header.appendChild(headerTitle);
        good.appendChild(body);
        wrapper.appendChild(good);
        container.appendChild(wrapper);

        this.addEventListener(button);
    }

    addEventListener(button) {
        button.addEventListener('click', () => {
            basket.addGood({
                id: this.id,
                title: this.title,
                price: this.price
            });
        })

    }


}