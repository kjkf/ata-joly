let popup = document.getElementsByClassName('popup-block') //это поп-ап
let popup_name = document.getElementsByClassName('popup-block__name')//наименование поп-ап
let popup_close = document.getElementsByClassName('popup-block__close')//кнопка закрыть
let popup_caption = document.getElementsByClassName('popup-block__caption')//заголовок поп-ап
let popup_content = document.getElementsByClassName('popup-block__content')// это содержимое поп-ап

function closePopup(){
  if (popup[0].style.display == 'flex'){
    if (popup_caption[0].style.display == 'flex'){
      popup_caption[0].classList.remove('popup-block__caption-yellow');
      popup_caption[0].classList.remove('popup-block__caption-blue');
      popup_caption[0].style.display='none'
    }
    popup_content[0].classList.remove('scrolled');
    popup_content[0].classList.remove('popup-block__content-yellow');
    popup_content[0].classList.remove('popup-block__content-blue');
    popup_content[0].style.padding='20px'

    popup_close[0].classList.remove('popup-block__close-white');
    popup_close[0].classList.remove('popup-block__close-blue');
    popup[0].style.display = 'none'
  }
}

function showFeedBack(){
  let feedback = document.getElementsByClassName('feedback-block') // это обратная связь
  popup_name[0].innerHTML = "Кері байланыс";
  popup_content[0].innerHTML=feedback[0].innerHTML

  popup_caption[0].classList.add('popup-block__caption-blue');
  popup_close[0].classList.add('popup-block__close-white');

  popup_content[0].style.padding='0'
  popup_caption[0].style.display='flex';
  popup[0].style.display='flex'
}

function showCond(){
  let cond = document.getElementsByClassName('footer-cond'); // это условия использования сайта
  popup_name[0].innerHTML= "Условия";
  popup_content[0].innerHTML="<div class='footer-cond' style='display:flex;'>"+cond[0].innerHTML+"</div>";

  popup_content[0].classList.add('popup-block__content-blue');
  popup_content[0].classList.add('scrolled');
  popup_caption[0].classList.add('popup-block__caption-blue');
  popup_close[0].classList.add('popup-block__close-white');

  popup_content[0].style.display='-webkit-box'
  popup_caption[0].style.display='flex';
  popup[0].style.display='flex';
}

function showBooks(){
  let books = document.getElementsByClassName('books-menu-wrap'); // это условия использования сайта
  popup_name[0].innerHTML = "Кітаптар";
  popup_content[0].innerHTML="<div class='books-menu-wrap' style='display:flex'>"+books[0].innerHTML+"</div>";

  popup_content[0].classList.add('popup-block__content-yellow');
  popup_content[0].classList.add('scrolled');
  popup_caption[0].classList.add('popup-block__caption-yellow');
  popup_close[0].classList.add('popup-block__close-blue');

  popup_content[0].style.display='-webkit-box'
  popup_caption[0].style.display='flex';
  popup[0].style.display='flex';
}
