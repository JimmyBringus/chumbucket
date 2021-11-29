window.onload = themeLight;
// window.localStorage.pageTheme = "";
var darkBtnImpress = document.querySelector(".bf-footer-button-dark");
var lightBtnImpress = document.querySelector(".bf-footer-button-light");
var darkBody = document.querySelector(".bf-body");
var darkHeroInner = document.querySelector(".bf-homepage-hero-innerbox");
var darkNav = document.querySelectorAll(".bf-navlink");
var footerbtn = document.querySelector('.bf-footer-button');
var testDimensions = document.querySelectorAll('.bf-test-dimensions');
var footer = document.querySelectorAll('.bf-footer');
var registrationButton = document.querySelector('.bf-homepage-innerbox-register');




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
  registrationButton.classList.remove('bf-homepage-innerbox-register-dark');
  toggleLightNavLinks();
  toggleLightTestDimensions();
  toggleFooterLight();
  darkBtnImpress.classList.remove('bf-footer-click');
  darkBtnImpress.classList.remove('bf-footer-click-disable');
  darkBtnImpress.classList.add('bt-footer-click-enable');
  lightBtnImpress.classList.add('bf-footer-click');
  lightBtnImpress.classList.add('bf-footer-click-disable');
}


function themeDark(){
  window.localStorage.pageTheme = 'dark';
  darkBody.classList.add("bf-body-dark-mode");
  darkHeroInner.classList.add("bf-homepage-hero-innerbox-dark-mode");
  registrationButton.classList.add('bf-homepage-innerbox-register-dark');
  toggleDarkNavLinks();
  toggleDarkTestDimensions();
  toggleFooterDark();
  darkBtnImpress.classList.add('bf-footer-click');
  darkBtnImpress.classList.add('bf-footer-click-disable');
  lightBtnImpress.classList.remove('bf-footer-click');
  lightBtnImpress.classList.remove('bf-footer-click-disable');
  lightBtnImpress.classList.add('bt-footer-click-enable');
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