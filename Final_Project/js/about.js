var btnImpress = document.querySelector(".bf-footer-button");
var aboutContainer = document.querySelector('.bf-about-container');
var aboutCardBodies = document.querySelectorAll('.bf-card-body');
var darkBody = document.querySelector(".bf-body");
let darkNav = document.querySelectorAll(".bf-navlink");
var footer = document.querySelector('.bf-footer');
var footerbtn = document.querySelector('.bf-footer-button');


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
}


function themeDark(){
    window.localStorage.pageTheme = 'dark';
        darkBody.classList.add("bf-body-dark-mode");
        toggleDarkNavLinks();
        toggleFooterDark();
        aboutContainer.classList.add("bf-about-container-dark");
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