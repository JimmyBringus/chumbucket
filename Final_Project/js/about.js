window.onload = themeLight;
var darkBtnImpress = document.querySelector(".bf-footer-button-dark");
var lightBtnImpress = document.querySelector(".bf-footer-button-light");
var aboutContainer = document.querySelector('.bf-about-container');
var aboutCardBodies = document.querySelectorAll('.bf-card-body');
var darkBody = document.querySelector(".bf-body");
let darkNav = document.querySelectorAll(".bf-navlink");
var footer = document.querySelector('.bf-footer');
var footerbtn = document.querySelector('.bf-footer-button');

document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".hamburger").addEventListener("click", function () {
      document.querySelector(".navigation").classList.toggle("showNav");
      document.querySelector(".hamburger").classList.toggle("hamburger-clicked");
    });
  });

document.addEventListener('DOMContentLoaded', function(event){
    let allDarkButtons = document.querySelectorAll('.bf-footer-button-dark')
    for (let button of allDarkButtons){
      button.addEventListener('click',themeDark);
    };  
    let allLightButtons = document.querySelectorAll('.bf-footer-button-light')
    for (let button of allLightButtons){
      button.addEventListener('click',themeLight);
    };
});


 function themeLight(){
    window.localStorage.pageTheme = 'light';
    darkBody.classList.remove("bf-body-dark-mode");
    toggleLightNavLinks();
    toggleFooterLight();
    aboutContainer.classList.remove("bf-about-container-dark");
    darkBtnImpress.classList.remove('bf-footer-click');
    darkBtnImpress.classList.remove('bf-footer-click-disable');
    darkBtnImpress.classList.add('bt-footer-click-enable');
    lightBtnImpress.classList.add('bf-footer-click');
    lightBtnImpress.classList.add('bf-footer-click-disable');
    document.querySelector('.hamburger_img').setAttribute("src", "./css/assets/Hamburger_icon_light.png"); 
}


function themeDark(){
    window.localStorage.pageTheme = 'dark';
    darkBody.classList.add("bf-body-dark-mode");
    toggleDarkNavLinks();
    toggleFooterDark();
    aboutContainer.classList.add("bf-about-container-dark");
    darkBtnImpress.classList.add('bf-footer-click');
    darkBtnImpress.classList.add('bf-footer-click-disable');
    lightBtnImpress.classList.remove('bf-footer-click');
    lightBtnImpress.classList.remove('bf-footer-click-disable');
    lightBtnImpress.classList.add('bt-footer-click-enable');
    document.querySelector('.hamburger_img').setAttribute("src", "./css/assets/Hamburger_icon_dark.png");
};

function toggleDarkNavLinks(){
    for (i = 0; i < darkNav.length; i++){
      darkNav[i].classList.add('bf-nav-dark-mode');
    }
};

function toggleFooterDark() {
    footer.classList.add("bf-footer-dark")
};

function toggleLightNavLinks(){
    for (i = 0; i < darkNav.length; i++){
    darkNav[i].classList.remove('bf-nav-dark-mode');
    }
};

function toggleFooterLight() {
    footer.classList.remove("bf-footer-dark");
};