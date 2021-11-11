function selectPet(petType){

    console.log("We've selceted a "+petType);
    
    // Get the specific pet data set
    let thePet = petData[petType];
    console.log(thePet);
    // Set the title
    document.querySelector(".petDisplayName").innerText = thePet.displayName;

    let petSpecs = "";

    // Add the space required, size, weight
    petSpecs += `<dt>Size</dt><dd>${thePet.size}</dd>`;
    petSpecs += "<dt>Weight</dt><dd>" + thePet.weight + "</dd>";
    petSpecs += `<dt>Space Required</dt><dd>${thePet.spaceRequired}</dd>`;
 
    // Add logic to add the trainability and lap size images

    if(thePet.trainability == true){
        petSpecs += "<dt>Trainable</dt><dd><img src='img/200px-Gnome-emblem-default.svg.png' alt='Check Mark' class='checkmark'</dd>";
    }else{
        petSpecs += "<dt>Trainable</dt><dd><img src='img/200px-Gnome-emblem-unreadable.svg.png' alt='No Mark' class='checkmark'</dd>";
    };

    if(thePet.fitsOnLap == true){
        petSpecs += "<dt>Fits on Lap</dt><dd><img src='img/200px-Gnome-emblem-default.svg.png' alt='Check Mark' class='checkmark'</dd>";
    }else{
        petSpecs += "<dt>Fits on Lap</dt><dd><img src='img/200px-Gnome-emblem-unreadable.svg.png' alt='No Mark' class='checkmark'</dd>";
    };



    // Add the foods (may require loop)

    petSpecs += "<dt>Foods</dt><dd><ul>";

    for(let i=0;i<thePet.foods.length;i++){
        petSpecs += "<li>"+thePet.foods[i]+"</li>";
    }

    petSpecs += "</ul><dd>";

    document.querySelector(".petsDataSpecs").innerHTML = petSpecs;



    // Update the images

    // Set the large image with the data fro the first image in the set
        document.querySelector(".photoLarge").setAttribute("alt",thePet.images[0].alt);
        document.querySelector(".photoLarge").setAttribute("src",thePet.images[0].img);

    // Loop to add all the thumbnails
    let newThumbnails="";
    for(let i=0;i<thePet.images.length;i++)
        newThumbnails += `<a href="${thePet.images[i].img}"><img class="photoThumb" alt="${thePet.images[i].alt}" src="${thePet.images[i].thumb}"/></a>`;

    document.querySelector(".thumbHaus").innerHTML = newThumbnails;

    
    // Apply the click event to thumbnails (note - this will likely need to be applied to the a and not the img direclty)

    let thumbSet = document.querySelectorAll(".thumbHaus > a");

    for(let i=0; i<thumbSet.length; i++){
        thumbSet[i].addEventListener('mouseover', function(e){
            e.preventDefault();

            document.querySelector(".photoLarge").setAttribute("alt",this.querySelector('img').getAttribute('alt'));

            document.querySelector(".photoLarge").setAttribute("src",this.getAttribute('href'));
        });
    }

    // Insert the ideal for
    let idealForList = "";

    for(let i=0;i<thePet.idealOwner.length;i++){
        idealForList += `<li>${thePet.idealOwner[i]}</li>`;
    }

    document.querySelector('.idealFor').innerHTML = idealForList;

    // Add the adoption groups
    let adoptForList = "";

    for(let i=0;i<thePet.adoption.length;i++){
        adoptForList += `<li><a href="${thePet.adoption[i].url}">${thePet.adoption[i].name}</a></li>`;
    }

    document.querySelector('.adoptionGroups').innerHTML = adoptForList;

}// end selectPet



document.addEventListener('DOMContentLoaded', function(event) {

    // Initial run
    selectPet("dog");
    //Update whenever a new value is picked
    document.querySelector("#petType").addEventListener("change",function(){

    // Get what was selected
    let selectedPet = document.querySelector("#petType").value;


    // Call select pet with the selection
    selectPet(selectedPet);

    });

});






