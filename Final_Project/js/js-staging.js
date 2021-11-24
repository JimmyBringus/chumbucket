let darkmode = document.querySelector(".bf-footer-button");


document.addEventListener('DOMContentLoaded', function(event) {
    document.querySelector('.bf-footer-button').addEventListener('click',function(e){
        e.preventDefault();
        darkmode.classList.toggle('bf-footer-click');
    })
});

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
}