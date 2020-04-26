;(function() {
    const langMenu = document.querySelector('.lang-menu');
    const socialMenu = document.querySelector('.social-menu');

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

})();