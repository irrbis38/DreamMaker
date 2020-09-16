// accordeon

let acc = document.getElementsByClassName("questions__header");

for(let i = 0; i < acc.length; i++) {
    acc[i].onclick = function () {
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");
    }
}


// burger-menu

$(document).ready(function(){

    $('.intro__burger').click(function(event) {
          $('.intro__burger, .intro__menu').toggleClass('active');
          $('body').toggleClass('lock');
      });
      $('.intro__list').click(function(event) {
  
          $('.intro__burger,.intro__menu').removeClass('active');
  
          $('body').removeClass('lock');
      });    
});

// footer__accordeon

let footerAcc = document.getElementsByClassName("footer__title");

for(let i = 0; i < footerAcc.length; i++) {
    footerAcc[i].onclick = function () {
        this.classList.toggle("footerActive");
        this.nextElementSibling.classList.toggle("footerShow");
    }
}