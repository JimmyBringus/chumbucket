// When the #grayButton is clicked, the color scheme of the page should change to more of a "dark mode" feel, with gray backgrounds and white text throughout.
// The #whiteButton should bring things back to the "light mode" color scheme with white backgrounds and dark text
// Try to do this by setting styles (.style)
// Remember to try one step at a time, testing each stage as you go!

let grayButton = document.getElementById("grayButton");

grayButton.addEventListener("click", 

function(){
    document.querySelector("body").classList.add("dark-mode")
})

let whiteButton = document.getElementById("whiteButton");

whiteButton.addEventListener("click", 

function(){
    document.querySelector("body").classList.remove("dark-mode")
})