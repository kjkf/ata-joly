;(function() {
    const langMenu = document.querySelector('.lang-menu');
    const socialMenu = document.querySelector('.social-menu');
    const headerNav = document.querySelector('.header__nav');
    const btnGumburg = document.querySelector('.btn-gamburg');
    const headerMobile = document.querySelector('.header-mob');
    const footer = document.getElementById('footer');
    const search_btn = document.querySelector('.search__btn');
    const search = document.querySelector('.search');

    // window.onresize = function () {
    //   location.reload();
    // };

    if (window.innerWidth < 1024) {
        const headerMobileContainer = document.querySelector('.header-mob .container');
        headerMobileContainer.append(search);
        headerMobileContainer.append(langMenu);
        headerMobileContainer.append(socialMenu);
    }

    langMenu.addEventListener('click', e => {
        e.preventDefault();
        if (langMenu.classList.contains('selected')) {
            langMenu.classList.remove('selected');
            if (window.innerWidth < 1024){
            socialMenu.style.display='none';
            search.style.display='none';}
        } else {
            let current = e.target.closest('li');
            if (current) {
                let active = langMenu.querySelector('li.active');
                active.classList.remove('active');
                current.classList.add('active');
            }
            langMenu.classList.add('selected');
            if (window.innerWidth < 1024){
            socialMenu.style.display='flex';
            search.style.display='flex';}
        }

    });
    search_btn.addEventListener('click', e => {
      e.preventDefault();
      if (search.classList.contains('closed')) {
          search.classList.remove('closed');
          if (window.innerWidth < 1024){
          socialMenu.style.display='none';
          langMenu.style.display='none';}
      } else {
          search.classList.add('closed');
          if (window.innerWidth < 1024){
          socialMenu.style.display='flex';
          langMenu.style.display='flex';}
      }

    })

    btnGumburg.addEventListener('click', e => {
        headerNav.classList.add('active');
        const btnClose = document.querySelector('#btn_close');
        if (window.innerWidth < 1024){
          const headerMobileContainer = document.querySelector('.header-mob');
          headerMobileContainer.style.display='none'
        }
        btnClose.addEventListener('click', e => {
            headerNav.classList.remove('active');
            if (window.innerWidth < 1024){
              const headerMobileContainer = document.querySelector('.header-mob');
              headerMobileContainer.style.display='flex'
            }
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
