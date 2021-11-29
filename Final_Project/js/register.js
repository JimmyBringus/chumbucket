var registrationContainerBorder = document.querySelector('#bf-registration-border');
var footer = document.querySelector('.bf-footer');
var footerbtn = document.querySelector('.bf-footer-button');
var darkBody = document.querySelector(".bf-body");
var darkNav = document.querySelectorAll(".bf-navlink");

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
        toggleLightNavLinks();
        toggleFooterLight();
        registrationContainerBorder.classList.remove("bf-registration-container-dark");
};
  
  
function themeDark(){
    window.localStorage.pageTheme = 'dark';
        darkBody.classList.add("bf-body-dark-mode");
        toggleDarkNavLinks();
        toggleFooterDark();
        registrationContainerBorder.classList.add("bf-registration-container-dark");
};



function toggleFooterDark() {
    footer.classList.add("bf-footer-dark")
};

function toggleFooterLight() {
    footer.classList.remove("bf-footer-dark")
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

var alertPlaceholder = document.getElementById('liveAlertPlaceholder')
var alertTrigger = document.getElementById('liveAlertBtn')

function alert(message, type) {
  var wrapper = document.createElement('div')
  wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'

  alertPlaceholder.append(wrapper)
}

if (alertTrigger) {
  alertTrigger.addEventListener('click', function () {
    alert('Form submitted, see you soon.')
  })
};