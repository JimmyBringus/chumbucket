

let truliaCards = document.getElementsByClassName("trulia-grid-item");



document.addEventListener('DOMContentLoaded', function(event) {

  document.querySelector(".trulia-nav-toggle").addEventListener('click', function(e){
    e.preventDefault();
    let navSet = document.querySelectorAll(".trulia-nav < nav ul");

    for(let n=0; n < navSet.length; n++){
        navSet[n].classList.toggle("trulia-nav-mobilehide");
    }



});
// Toggle the navigation






// Loop through all the cards

for (var i = 0; i < truliaCards.length; i++){
  truliaCards[i].addEventListener("click", function(){
    for (var r = 0; r < truliaCards.length; r++){
      truliaCards[r].classList.remove("trulia-featured-grid-item")
    }
    this.classList.add('trulia-featured-grid-item')
  });
}
    
  // Add a click listener on each card
      
      // Remove the featured class


      // Add the featured class on the one clicked on



  });  



