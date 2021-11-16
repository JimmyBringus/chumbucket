
// ToDo
// When the user submits the search form, make an API request to open weather api's search endpoint
// https://api.openweathermap.org/data/2.5/weather?q=CITY&APPID=KEY
// Icon URL - refer to docs on how to use
// https://openweathermap.org/img/wn/####@2x.png  - replace #### with icon code
// Display the results in the #weather-results div
// Each new search should erase the previous results

const myApiKey = "";

async function handleWeatherRequest(e) {
  e.preventDefault();
  
  // get user input value from textbox

  const inputLocation = document.querySelector("#userInput").value;
  
  // build the url address with YOUR personal API key and the users input city

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${inputLocation}&APPID=${myApiKey}`;
  
  // make an API call using fetch() and capture the response in a variable

  const response = await fetch(apiUrl);
 
  // convert the response to a readable json format with .json()

  const responseData = await response.json();
  
  // print your data to the console to see its format, dont forget to delete later

  console.log(responseData);
  
  // Write a separate function to convert the temps from the default units (Kelvin) to a more readable F or C

  console.log(convertToK(responseData.main.feels_like));
  
  // build the icon src
  
  // create icon img tag
  
  // add icon url as src
  
  // clear out previous icon img
  
  // print all results to dom
  
  // append icon img to dom
  
}

function convertToK(Kelvin) {
  let celsius = Kelvin - 273.5;
  celsius = Math.round(celsius);
  return celsius;
}

// Attach an event listener to the submit button

document.getElementById('submit').addEventListener('click',handleWeatherRequest);