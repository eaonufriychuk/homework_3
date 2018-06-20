'use strict';

class Basket {
    constructor() {
        this.goods = JSON.parse(localStorage.getItem('cart')) || [];
        this.state = {
            count: 0
        }
        this.render();
        this.renderGoods();

    }
    render() {
        const basket = document.getElementById('basket');
        const body = document.createElement('div');
        const header = document.createElement('div');
        const headerTitle = document.createElement('h4');
        const basketBody = document.createElement('div');
        const basketItems = document.createElement('div');
        const basketText = document.createElement('p');

        body.classList.add('card');
        header.classList.add('card-header');
        basketBody.classList.add('card-body');
        basketItems.classList.add('basket-items');
        basketText.classList.add('basket-content');

        headerTitle.textContent = 'Cart';

        basket.appendChild(body);
        body.appendChild(header);
        header.appendChild(headerTitle);
        body.appendChild(basketBody);
        basketBody.appendChild(basketText);
        basketBody.appendChild(basketItems);
        basketText.textContent = `Количество товаров: ${this.goods.length}`;
    }


    renderGoods() {
        if (this.goods.length === 0) {
            return;
        }
        this.reset();
        const basketItems = document.querySelector('.basket-items');

        this.goods.forEach(value => {
            const basketItem = document.createElement('div');
            const close = document.createElement('div');

            basketItem.classList.add('item');
            close.classList.add('close');
            close.setAttribute('data-id', `${value.id+1}`);
            basketItem.textContent = `${value.id+1}`;
            close.textContent = 'x';
            basketItem.appendChild(close);
            basketItems.appendChild(basketItem);
            this.addEventListener(close);
        })

    }

    reset() {
        const basketItems = document.querySelector('.basket-items');
        const basketText = document.querySelector('.basket-content');
        basketItems.innerHTML = '';
        basketText.textContent = `Количество товаров: ${this.goods.length}`;
    }

    addGood(good) {
        if (typeof good !== 'object') {
            return;
        }

        if (!this.goods.some(value => value.id === good.id)) {
            this.goods.push(good);
            this.basketStorage(good.id, 'POST');
            this.state.count++;
            this.reset();
            this.renderGoods();
        }
    }

    deleteGood(id) {
        if (typeof id !== 'number') {
            return;
        }
        if (this.goods.some((val) => val.id === id)) {
            const index = this.goods.findIndex(val => val.id === id);
            console.log(index);
            console.log(this.goods);
            this.goods.splice(index, 1);
            this.basketStorage(id, 'DELETE');
            this.state.count--;
            this.reset();
            this.renderGoods();
        }
    }

    addEventListener(elem) {
        if (elem instanceof Node) {
            elem.addEventListener('click', () => {
                this.deleteGood(+elem.getAttribute('data-id') - 1);
            })
        }
    }

    basketStorage(id, method) {
        if (typeof id !== 'number' && typeof method !== 'string') {
            return;
        }
        let result = null;
        fetch('/my-user', {
                credentials: 'include'
            })
            .then(res => res.json())
            .then(data => {
                result = data;
                if (result.auth === false) {
                    localStorage.setItem('cart', JSON.stringify(this.goods));
                } else if (result.auth) {
                    fetch('/cart/0', {
                            method: method,
                            body: JSON.stringify({
                                cart: id
                            }),
                            headers: {
                                'Content-Type': 'application/json'
                            }
                        }).then(res => {
                            if (res.status === 200) {
                                return res;
                            }
                            throw new Error(res.statusText)
                        })
                        .then(res => res.json())
                        .then(data => console.log(data))
                        .catch(e => console.log(e));
                }
            })
            .catch(e => console.log(e));
    }
}