const navbarLinks = document.querySelectorAll(".smooth_scroll");

for(let i=0; i<navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", navbarLinkClick);
}

function navbarLinkClick(event) {
  removeActive();
  let classes = event.currentTarget.getAttribute("class")+' selected_link';
  event.currentTarget.setAttribute('class', classes)
  //
  // let child = event.currentTarget.parentNode.getAttribute('class');
  // if (child == 'menu-sub__item'){
  //   let parent = event.currentTarget.parentNode.closest('menu__link');
  //   console.log("parent >>> " + parent)
  // }

  //parent.classList.add('selected');
  console.log("event.currentTarget. >>> " + event.currentTarget.parentNode.getAttribute('class'))

  smoothScroll(event);
}

function removeActive(){
  let selected = document.querySelectorAll(".selected_link");
  selected.forEach(el => {
    el.classList.remove('selected_link')
  })
}

function smoothScroll(event) {
  event.preventDefault();
  const targetId = event.currentTarget.getAttribute("href")==="#" ? "header" : event.currentTarget.getAttribute("href");
  const targetPosition = document.querySelector(targetId).offsetTop;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition - 50;
  const duration = 1500;
  let start = null;

  window.requestAnimationFrame(step);

  function step(timestamp) {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    // window.scrollTo(0, distance*(progress/duration) + startPosition);
    window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
    if (progress < duration) window.requestAnimationFrame(step);
  }
}

// Easing Functions
function linear(t, b, c, d) {
	return c*t/d + b;
};

function easeInOutQuad(t, b, c, d) {
	t /= d/2;
	if (t < 1) return c/2*t*t + b;
	t--;
	return -c/2 * (t*(t-2) - 1) + b;
};

function easeInOutCubic(t, b, c, d) {
	t /= d/2;
	if (t < 1) return c/2*t*t*t + b;
	t -= 2;
	return c/2*(t*t*t + 2) + b;
};
