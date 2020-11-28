

/*-----------------------BURGER----------------------*/

const navbutton = document.querySelector('.navbutton');
const naviburger = document.querySelector('.naviburger');

navbutton.addEventListener('click', () => {
    navbutton.classList.toggle('active'); 
    naviburger.classList.toggle('active');   
});





/*--------------------COLORPICKER--------------------*/

const themebutton = document.querySelector('.themebutton');
const body = document.querySelector('body');

themebutton.addEventListener('click', () => {
    body.classList.toggle('switchcolor');    
});





/*-------------------MENU-ACCORDEON--------------------*/

$( function() {
  $("#accordion").accordion();
});






/*-----------------------TRI--------------------------*/
