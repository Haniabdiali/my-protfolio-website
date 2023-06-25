
const burger = document.querySelector('.burger');
const burgerIcon = document.querySelector('.burger i');
const navber = document.querySelector('.navbar')

const navberLink = document.querySelectorAll('nav a');

navberLink.onclick = function (){
    navberLink.classList.toggle('activeLink')
}


burger.onclick = function(){
   navber.classList.toggle('active')
   burgerIcon.classList.toggle('fa-xmark')
}


window.onscroll = ()=>{
    navber.classList.remove('active')
    burgerIcon.classList.remove('fa-xmark')

}



