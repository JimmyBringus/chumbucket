// window.localStorage.pageTheme = "";
let btnImpress = document.querySelector(".bf-footer-button");
var darkBody = document.querySelector(".bf-body");
var darkHeroInner = document.querySelector(".bf-homepage-hero-innerbox");
var darkNav = document.querySelectorAll(".bf-navlink");
var footerbtn = document.querySelector('.bf-footer-button');
var testDimensions = document.querySelectorAll('.bf-test-dimensions');
var footer = document.querySelectorAll('.bf-footer');




document.addEventListener('DOMContentLoaded', function(event){
  // if (window.localStorage.pageTheme == 'light'){
  //   themeLight();
  // }else if (window.localStorage.pageTheme == 'dark'){
  //   themeDark();
  // };
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
        darkHeroInner.classList.remove("bf-homepage-hero-innerbox-dark-mode");
        toggleLightNavLinks();
        toggleLightTestDimensions();
        toggleFooterLight();
}


function themeDark(){
  window.localStorage.pageTheme = 'dark';
        darkBody.classList.add("bf-body-dark-mode");
        darkHeroInner.classList.add("bf-homepage-hero-innerbox-dark-mode");
        toggleDarkNavLinks();
        toggleDarkTestDimensions();
        toggleFooterDark();
};


function toggleDarkNavLinks(){
  for (i = 0; i < darkNav.length; ++i){
    darkNav[i].classList.add('bf-nav-dark-mode')
  }
};

function toggleDarkTestDimensions(){
  for (i = 0; i < testDimensions.length; ++i){
    testDimensions[i].classList.add('bf-test-dimensions-dark-mode')
  }
};

function toggleFooterDark() {
  for (i = 0; i < footer.length; i++){
    footer[i].classList.add("bf-footer-dark")
  }
};

function toggleLightNavLinks(){
  for (i = 0; i < darkNav.length; ++i){
    darkNav[i].classList.remove('bf-nav-dark-mode')
  }
};

function toggleLightTestDimensions(){
  for (i = 0; i < testDimensions.length; ++i){
    testDimensions[i].classList.remove('bf-test-dimensions-dark-mode')
  }
};

function toggleFooterLight() {
  for (i = 0; i < footer.length; i++){
    footer[i].classList.remove("bf-footer-dark")
  }
};