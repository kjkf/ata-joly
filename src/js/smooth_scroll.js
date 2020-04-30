const menu_links = document.querySelectorAll(".smooth_scroll");
const menu_links_out = document.querySelectorAll(".menu__link");

for(let i=0; i<menu_links.length; i++) {
  menu_links[i].addEventListener("click", menuLinkClick);
}

for(let i=0; i<menu_links_out.length; i++) {
  menu_links_out[i].addEventListener("click", menuBarClose);
}

function menuLinkClick(event) {
  removeActive();
  event.currentTarget.classList.add('selected_link');
  smoothScroll(event);
}

function removeActive(){
  let selected = document.querySelectorAll(".selected_link");
  selected.forEach(el => {
    el.classList.remove('selected_link')
  })
}

function menuBarClose(){
  //close menu
  const headerNav = document.querySelector('.header__nav');
  if (headerNav.classList.contains('active')){headerNav.classList.remove('active');}
  //----
}

function smoothScroll(event) {
  event.preventDefault();
  const targetId = event.currentTarget.getAttribute("href")==="#" ? "header" : event.currentTarget.getAttribute("href");
  const targetPosition = document.querySelector(targetId).offsetTop;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition - 50;
  const duration = 1500;
  let start = null;

  menuBarClose();

  window.requestAnimationFrame(step);

  function step(timestamp) {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
    if (progress < duration) window.requestAnimationFrame(step);
  }
}

// Easing Functions
// function linear(t, b, c, d) {
// 	return c*t/d + b;
// };
//
// function easeInOutQuad(t, b, c, d) {
// 	t /= d/2;
// 	if (t < 1) return c/2*t*t + b;
// 	t--;
// 	return -c/2 * (t*(t-2) - 1) + b;
// };

function easeInOutCubic(t, b, c, d) {
	t /= d/2;
	if (t < 1) return c/2*t*t*t + b;
	t -= 2;
	return c/2*(t*t*t + 2) + b;
};
