// Чтобы данный скрипт срабатывал корректно, у кнопки по клику
// на которую открывается блок навигации должен быть id navBtn,
// у блока навигации должен быть id mainNav и дополнительный класс nav-hidden, а также свойства overwflow: hidden и transition: height 2s;

// на экранах разрешением меньше 756 пикс у класса nav-hidden
// должно быть свойство height: 0;
// на экранах разрешением меньше 756 пикс блок навигации
// должен размещаться абсолютом и у него должно быть свойство z-index


function navToggle() {

    let navBtn = document.getElementById('navBtn');
    let mainNav = document.getElementById('mainNav');

    navBtn.onclick = function () {
        let heightNav = mainNav.firstElementChild.offsetHeight;
        if (mainNav.classList.contains('nav-hidden')) {
            mainNav.classList.remove('nav-hidden');
            mainNav.style.height = heightNav + 'px';
        } else {
            mainNav.classList.add('nav-hidden');
            mainNav.style.height = 0;
        }
    }

    window.addEventListener("resize", resizeHandler, false);

    function resizeHandler() {
        let heightNav = mainNav.firstElementChild.offsetHeight;
        if (document.documentElement.clientWidth >= 1200) {
            mainNav.style.height = 'auto';
        } else {
            if (mainNav.classList.contains('nav-hidden')) {
                mainNav.style.height = 0;
            } else {
                mainNav.style.height = heightNav + 'px';
            }
        }
    }

}

navToggle();

