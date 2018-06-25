import Good from './Good';

export default class GoodList {
    constructor() {
        this.render();
    }

    getGoodList(url, container) {
        if (typeof url === 'string' && container instanceof Node) {
            this.getApi(url)
                .then(data => {
                    console.log(data);

                    data.map(value => new Good(value.id, value.productName, value.price))
                        .forEach(value => value.render(container))
                })
                .catch(e => container.textContent = e);
        }
    }

    getApi(url) {
        return fetch(url).then(res => {
                if (res.status === 200) {
                    return res;
                }
                throw new Error('Ошибка');
            })
            .then(res => res.json())
            .catch(e => Promise.reject(e))
    }

    render() {
        const goodContainer = document.querySelector('.goods');

        this.getGoodList('./goods', goodContainer);
    }
}