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