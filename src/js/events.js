;(function() {
    const langMenu = document.querySelector('.lang-menu');

    langMenu.addEventListener('click', e => {
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