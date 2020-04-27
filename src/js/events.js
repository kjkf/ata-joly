;(function() {
    const langMenu = document.querySelector('.lang-menu');
    const socialMenu = document.querySelector('.social-menu');
    const headerNav = document.querySelector('.header__nav');
    const btnGumburg = document.querySelector('.btn-gamburg');
    const headerMobile = document.querySelector('.header-mob');
    const footer = document.getElementById('footer');
    const banner = document.querySelector('.banner');

    if (window.innerWidth < 1024) {
        const headerMobileContainer = document.querySelector('.header-mob .container');
        headerMobileContainer.append(langMenu);
        headerMobileContainer.append(socialMenu);

        banner.style.height = `${window.innerHeight}px`;
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
            if (footer.getBoundingClientRect().height > document.documentElement.scrollHeight - document.documentElement.clientHeight - pageYOffset) {
                headerMobile.style.display = 'none';
            } else {
                headerMobile.style.display = 'flex';
            }
        }

    });

})();