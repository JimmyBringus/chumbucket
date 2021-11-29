var aboutCardBodies = document.querySelectorAll('.bf-card-body');
var footer = document.querySelector('.bf-footer');
var footerbtn = document.querySelector('.bf-footer-button');
var darkBody = document.querySelector(".bf-body");
var darkNav = document.querySelectorAll(".bf-navlink");
var aboutContainer = document.querySelector('.bf-about-card-container');

document.addEventListener('DOMContentLoaded', function(event){
    let allDarkButtons = document.querySelectorAll('.bf-footer-button-dark')
    for (let button of allDarkButtons){
      button.addEventListener('click',themeDark);
    };  
    let allLightButtons = document.querySelectorAll('.bf-footer-button-light')
    for (let button of allLightButtons){
      button.addEventListener('click',themeLight);
    };
})

function themeLight(){
    window.localStorage.pageTheme = 'light';
        darkBody.classList.remove("bf-body-dark-mode");
        aboutContainer.classList.remove("bf-about-card-container-dark")
        toggleLightNavLinks();
        toggleFooterLight();
        toggleAboutCardBodyLight();
};
  
  
function themeDark(){
    window.localStorage.pageTheme = 'dark';
          darkBody.classList.add("bf-body-dark-mode");
          aboutContainer.classList.add("bf-about-card-container-dark");
          toggleDarkNavLinks();
          toggleFooterDark();
          toggleAboutCardBodyDark();
};
  


function toggleFooterDark() {
    footer.classList.add("bf-footer-dark")
};

function toggleFooterLight() {
    footer.classList.remove("bf-footer-dark")
};

function toggleAboutCardBodyLight() {
    for (i=0; i < aboutCardBodies.length; i++){
      aboutCardBodies[i].classList.remove("bf-card-body-dark")
    }
};

function toggleAboutCardBodyDark() {
    for (i=0; i < aboutCardBodies.length; i++){
      aboutCardBodies[i].classList.add("bf-card-body-dark")
    };
};

function toggleDarkNavLinks(){
    for (i = 0; i < darkNav.length; ++i){
      darkNav[i].classList.add('bf-nav-dark-mode')
    }
};

function toggleLightNavLinks(){
    for (i = 0; i < darkNav.length; ++i){
      darkNav[i].classList.remove('bf-nav-dark-mode')
    }
};