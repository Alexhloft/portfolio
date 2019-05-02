let menu =  (function(options) {

    let button = document.querySelector('#toggle');
    let overlay = document.querySelector('#overlay');
    let navItem = document.querySelectorAll('.nav__item.nav__item--overlay');

    let toggleMenu = function(e) {
        button.classList.toggle('menu-btn--active'); 
        overlay.classList.toggle('overlay--active');
    }

    let addListeners = function() {
        button.addEventListener('click', toggleMenu);

        for (var i=0; i < navItem.length; i++ ) {
            navItem[i].addEventListener('click', toggleMenu);
        }
    }

    return {toggle: addListeners};
})();

menu.toggle();