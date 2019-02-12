let toggler = document.getElementById('toggler');
toggler.addEventListener('click', toggleBackground);


function toggleBackground(){

  let header = document.getElementById('main-header');
  let menu = document.getElementById('navbar');

  if (menu.className == 'navbar-collapse collapse show'){
    header.classList.remove('bg-toggle');
  } else {
    header.classList.add('bg-toggle');
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