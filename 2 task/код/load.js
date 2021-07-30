'use strict';

// 1. Получите ссылку на .scrollCheck
let scrollCheck = document.querySelector('.scrollCheck');
let i = 0;

/**
 * Инициализация. При открытии страницы вставляем несколько постов
 * на страницу 
 */
function init() {
    // 4. Если условие истинно, то вызывайте insertPosts и рекурсивно вызывайте
    // init.
    if (window.innerHeight === document.body.offsetHeight) {
        insertPosts();
        init();
    }
}
init();

document.addEventListener('scroll', function (event) {
    if (scrollCheck.getBoundingClientRect().top <= window.innerHeight) {
        // 5. Если условие истинно вызывайте insertPosts.
        insertPosts();
    }
});

/**
 * Функция вставляет несколько постов на страницу.
 */
function insertPosts() {
    // 3. в postsMarkup вам надо будет в цикле дописывать с помощью конкатенации
    // разметку, возвращаемую getPostMarkup.
    // 3.1 в getPostMarkup в качестве аргумента передавайте счетчик цикла
    // 3.2 Перед scrollCheck вставьте записанную в postsMarkup разметку
    i++;
    let postsMarkup = getPostMarkup(i);
    scrollCheck.insertAdjacentHTML('beforebegin', postsMarkup);
}

/**
 * Функция возвращает html-разметку для одного поста, который будет
 * вставляться на страницу.
 * @param {number} counter число, для того, чтобы прибавить его ко времени unix.
 * @returns {string} html-разметка одного поста
 */
function getPostMarkup(counter) {
    /* 2. Сделайте, чтобы в num записывалось текущее время unix (https://mzl.la/3iMz2Jr)
    плюс counter
    */
    let date = new Date();
    let num = date + counter;
    return `<div class="post">
        <img src="https://picsum.photos/200/300?random=${num}">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum sapiente suscipit aut? Veniam perspiciatis esse nesciunt ipsum numquam
    </div>`;
}