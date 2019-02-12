let togglerButton = document.getElementById('togglerButton');
togglerButton.addEventListener('click', toggleBackground);


function toggleBackground(){

  let header = document.getElementById('main-header');
  let menu = document.getElementById('navbar');
  let togglerButtonIcon = document.getElementById('togglerButtonIcon')

  if (menu.className == 'navbar-collapse collapse show'){
    header.classList.remove('bg-toggle');
    togglerButtonIcon.className = "fas fa-bars";

  } else {
    header.classList.add('bg-toggle');
    togglerButtonIcon.className = "fas fa-times";
  }
}



window.onscroll = function (){
  let header = document.getElementById('main-header');
  let logo = document.getElementById('logo');
  
  header.classList.add('scroll-sticky');
  logo.classList.add('small-logo');
  

  if (window.scrollY == 0){
    header.classList.remove('scroll-sticky');
    logo.classList.remove('small-logo');

  }
}

