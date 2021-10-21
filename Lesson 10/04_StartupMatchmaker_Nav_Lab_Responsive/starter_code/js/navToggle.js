document.addEventListener('DOMContentLoaded', function(event) {

    document.getElementById('nav-toggle').addEventListener('click',function(){
        document.querySelector('.main-nav').classList.toggle('main-nav-mobilehide');
    })

});