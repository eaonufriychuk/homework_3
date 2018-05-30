'use strict';

const buttonBack = document.querySelector('.back');
const buttonNext = document.querySelector('.next');

let {page} = {page: 1};

window.onload = () => {
    const goodList = new GoodList();

    /**
     * Функция, которая возвращает строку, содержащую строку запроса, подходящую для использования в URL-адресе.
     * @return {string} Строка, содержащая строку запроса, подходящую для использования в URL-адресе.
     */
    function getUrlSearParams() {
        const urlSearchParams = new URLSearchParams({page: page});
        return urlSearchParams.toString();
    }

    /**
     * Функция, которая удаляет у элементов класс.
     */
    function removeClassList() {
        buttonNext.classList.remove('disabled');
        buttonBack.classList.remove('disabled');
    }

    goodList.getGoodList(`/goods/?${getUrlSearParams()}`);

    buttonNext.addEventListener('click', () => {
        removeClassList();
        page++;
        goodList.getGoodList(`/goods/?${getUrlSearParams()}`);
    });

    buttonBack.addEventListener('click', () => {
        removeClassList();
        if (page <= 1) {
            buttonBack.classList.add('disabled');
            return;
        }
        page--;
        goodList.getGoodList(`/goods/?${getUrlSearParams()}`);
    });
};
