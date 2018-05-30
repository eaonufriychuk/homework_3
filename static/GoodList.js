"use strict";

const goodContainer = document.getElementById('good_container');
const template = document.querySelector('#tmplt');

/**
 * Класс списка товаров.
 */
class GoodList {

    /**
     * Метод, который делает запрос и отрисовывает товары.
     * @param {string} url URL, на который делается запрос.
     */
    getGoodList(url) {
        this.getApi(url).then(data => {
            console.log(data);
            if (data.length === 0) {
                buttonNext.classList.add('disabled');
                return page--;
            }
            console.log(data);
            this.render(data);
        }).catch(e => {
            this.render({error: e});
        })
    }

    /**
     * Метод, который возвращает промис.
     * @param {string} url URL, на который делается запрос.
     * @return {Promise} Возвращает промис.
     */
    getApi(url) {
        return fetch(url).then(res => {
            if (res.status === 200) {
                return res;
            }
            throw new Error('Ошибка');
        })
            .then(res => res.json())
            .catch(e => Promise.reject(e))
    };

    /**
     * Метод, который отрисовывает список товаров.
     * @param {(array|object)} data Массив с товарами.
     */
    render(data) {
        goodContainer.innerHTML = '';
        if (data && data.length && data.length > 0) {
            this.addGoodsBlocks(data);
        } else {
            const error = document.createElement('div');
            error.textContent = data.error;
            goodContainer.appendChild(error);
        }
    }

    /**
     * Метод, который генерит блок товара.
     * @param {object} data Объект товара.
     * @return {Node} Блок товара.
     */
    renderBlock(data) {
        const block = template.querySelector('.block').cloneNode(true);

        block.querySelector('.block__name').textContent = `${data.id + 1}) Name: ${data.productName}`;
        block.querySelector('.block__price').textContent = `Price: ${data.price}`;

        return block;
    }

    /**
     * Метод, который добавляет товары в родительский контейнер.
     * @param {array} data Массив товаров.
     */
    addGoodsBlocks(data) {
        data.forEach(elem => goodContainer.appendChild(this.renderBlock(elem)));
    }
}