const burger = document.querySelector('.header__btn');
const header = document.querySelector('.header');

function showMenu() {
  burger.addEventListener('click', function() {
    header.classList.toggle('isMobile');
  });
}


export { showMenu };
