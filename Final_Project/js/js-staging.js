let darkmode = document.querySelector(".bf-footer-button");


document.addEventListener('DOMContentLoaded', function(event) {
    document.querySelector('.bf-footer-button').addEventListener('click',function(e){
        e.preventDefault();
        darkmode.classList.toggle('bf-footer-click');
    })
})