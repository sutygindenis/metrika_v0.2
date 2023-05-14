const BURGER_OPENED_CLASSNAME = 'burger_open';
const BURGER_BTN_OPENED_CLASSNAME = 'burger-btn_open';
const BODY_FIXED_CLASSNAME_2 = 'body_fixed';


const bodyNodeBurger = document.querySelector('body');
const burgerNode = document.querySelector('.js-burger');
const burgerBtnOpenNode = document.querySelector('.js-burger-btn');
const burgerContentNode = document.querySelector('.js-burger__content');
const burgerBtnCloseNode = document.querySelector('.js-burger-close-btn')

burgerBtnOpenNode.addEventListener('click', toggleBurger);
burgerBtnCloseNode.addEventListener('click', toggleBurger);

burgerNode.addEventListener('click', (event) => {
    const isClickOutsideContent = !event.composedPath().includes(burgerContentNode)

    if (isClickOutsideContent) {
        toggleBurger();
    }
})

function toggleBurger() {
    burgerNode.classList.toggle(BURGER_OPENED_CLASSNAME);
    bodyNodeBurger.classList.toggle(BODY_FIXED_CLASSNAME_2);
    burgerBtnOpenNode.classList.toggle(BURGER_BTN_OPENED_CLASSNAME);
    burgerBtnCloseNode.classList.toggle(BURGER_BTN_OPENED_CLASSNAME);
}
