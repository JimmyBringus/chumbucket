//wait for the DOM elements to load before executing

document.addEventListener('DOMContentLoaded', function(event) {


    // Create a function that runs whenever the submit button is clicked
        function checkTheMood(event){    

        //prevent the submit button from refreshing the page
        event.preventDefault();

        //Create a variable called moodvalue and get the value of the #mood input
        let moodvalue = document.querySelector('#mood').value;

        document.querySelector('#mood').value = "";

        //Correct for capitalization
        moodvalue = moodvalue.toUpperCase();

        // if the user inputs excited / ecstatic / fantastic change the CSS class to 'excited'

        if (moodvalue == "EXCITED" || moodvalue == "ECSTATIC" || moodvalue == "FANTASTIC"){
            document.querySelector(".moodring > div").setAttribute("class", "excited");
        }

        // if the user inputs happy/good/great change the CSS class to 'happy'
        else if (moodvalue == "HAPPY" || moodvalue == "GOOD" || moodvalue == "GREAT"){
            document.querySelector(".moodring > div").setAttribute("class", "happy");
        }

        // if the user inputs bad/angry change the CSS class to 'bad'
        else if (moodvalue == "BAD" || moodvalue == "ANGRY"){
            document.querySelector(".moodring > div").setAttribute("class","bad");
        }
    }

    // Listen for user interaction on the submit button.
    document.getElementById('submit-btn').addEventListener('click',checkTheMood,false);
});