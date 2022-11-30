$(document).ready(function () {
    $('.phones_header__arrow').click(function () {
        $('.phones_header__list').toggleClass('spoler');
        $('.phones_header__arrow').toggleClass('rotate');
    });
    $('.footer-subscribe__inpute').click(function () {
        $('.footer-subscribe__inpute').toggleClass('none_placeholder');
    });
    $('.category-catalog__controll').click(function () {
        $('.category-catalog__controll').toggleClass('arrow-animation');
    });
});

document.addEventListener('click', documentActions);

const menuBlock = document.querySelectorAll('.sub-menu-catalog__body');
if (menuBlock.length) {
    menuBlock.forEach(menuBlock => {
        const menuBlockItems = menuBlock.querySelectorAll('.sub-menu-catalog__categoty').length;
        menuBlock.classList.add(`sub-menu-catalog__body_${menuBlockItems}`);
    });
}

function documentActions(e) {
    const targetElement = e.target;
    if (targetElement.closest('[data-parent]')) {
        const subMenuId = targetElement.dataset.parent ? targetElement.dataset.parent : null;
        const subMenu = document.querySelector(`[data-submenu="${subMenuId}"]`);
        const catalogMenu = document.querySelector('.catalog-header')
        if (subMenu) {
            const ActiveBlock = document.querySelector('._sub-menu-active');
            const OpenBlock = document.querySelector('._sub-menu-open');

            if (ActiveBlock && ActiveBlock !== targetElement && subMenuId < 14) {
                ActiveBlock.classList.remove('_sub-menu-active');
                OpenBlock.classList.remove('_sub-menu-open');
                document.documentElement.classList.remove('_sub-menu-open')
            }
            // document.documentElement.classList.toggle('_sub-menu-open')
            targetElement.classList.toggle('_sub-menu-active');
            subMenu.classList.toggle('_sub-menu-open');
        } else {
            console.log('Упс...')
        }

        e.preventDefault();
    }
    if (targetElement.closest('.menu-top-header__items_catalog')) {
        document.documentElement.classList.add('catalog-open')
        e.preventDefault();
    }
    if (targetElement.closest('.icon-menu,.menu-catalog__back')) {
        document.documentElement.classList.remove('catalog-open')
        document.querySelector('._sub-menu-active') ? document.querySelector('._sub-menu-active').classList.remove('_sub-menu-active') : null;
        document.querySelector('._sub-menu-open') ? document.querySelector('._sub-menu-open').classList.remove('_sub-menu-open') : null;
        e.preventDefault();
    }
    if (targetElement.closest('.sub-menu-catalog__back')) {
        document.documentElement.classList.remove('_sub-menu-open')
        document.querySelector('._sub-menu-active') ? document.querySelector('._sub-menu-active').classList.remove('_sub-menu-active') : null;
        document.querySelector('._sub-menu-open') ? document.querySelector('._sub-menu-open').classList.remove('_sub-menu-open') : null;
        e.preventDefault();
    }

}

document.addEventListener("DOMContentLoaded", () => {
    const priceSlider = document.getElementById('price-filter__range');
    const fromValue = document.querySelector('[data-range-frome]')
    const toValue = document.querySelector('[data-range-to]')

    noUiSlider.create(priceSlider, {
        start: [Number(fromValue.value), Number(toValue.value)],
        tooltips: [true, true],
        connect: true,
        // padding: 6,
        range: {
            'min': [Number(fromValue.dataset.rangeFrome)],
            'max': [Number(toValue.dataset.rangeTo)]
        },
    });
    priceSlider.noUiSlider.on('update', function (values, handle) {
        fromValue.value = values[handle = 0];
        toValue.value = values[handle = 1];
    })
})
//-------------------------------------------------------------------------------------quantity 
const Plus = document.querySelector('.quantity-button__plus')
const Minus = document.querySelector('.quantity-button__minus')
const Text = document.querySelector('.quantity-input-text')
Plus.addEventListener('click', () => {
    Text.value++
})

Minus.addEventListener('click', () => {
    if (Text.value > 1) {
        Text.value--
    }
})  