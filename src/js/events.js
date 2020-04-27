;(function() {
    const langMenu = document.querySelector('.lang-menu');
    const socialMenu = document.querySelector('.social-menu');
    const headerNav = document.querySelector('.header__nav');
    const btnGumburg = document.querySelector('.btn-gamburg');
    const headerMobile = document.querySelector('.header-mob');

    if (window.innerWidth < 1024) {
        const headerMobileContainer = document.querySelector('.header-mob .container');
        headerMobileContainer.append(langMenu);
        headerMobileContainer.append(socialMenu);
    }

    langMenu.addEventListener('click', e => {
        e.preventDefault();
        if (langMenu.classList.contains('selected')) {
            langMenu.classList.remove('selected');
        } else {
            let current = e.target.closest('li');
            if (current) {
                let active = langMenu.querySelector('li.active');
                active.classList.remove('active');
                current.classList.add('active');
            }
            langMenu.classList.add('selected');
        }

    });

    btnGumburg.addEventListener('click', e => {
        headerNav.classList.add('active');
        const btnClose = document.querySelector('#btn_close');

        btnClose.addEventListener('click', e => {
            headerNav.classList.remove('active');
        });

    });

    window.addEventListener('scroll', e => {
        if (window.innerWidth < 1024) {
            //console.log(document.documentElement.clientHeight, document.documentElement.scrollHeight);
            //console.log(pageYOffset);
            if (pageYOffset === document.documentElement.scrollHeight - document.documentElement.clientHeight) {
                headerMobile.style.display = 'none';
            } else {
                headerMobile.style.display = 'flex';
            }
        }

    });

})();