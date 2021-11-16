
// ToDo
// When the user submits the search form, make an API request to Giphy's search endpoint
// https://api.giphy.com/v1/gifs/search?api_key="YOURAPIKEY"&q="SEARCHSTRING"
// Display the results in the #giphy-results div provided in the html
// Each new search should replace the previous search results
// CSS Bonus: Use flex or grid properties to display the results in a responsive, clean layout

const apiKey = "";

async function giphySearch(e) {

  // prevent the page from submitting/reloading

  e.preventDefault();

  // get the user input from the form
  
  const searchInput = document.querySelector('#search-input').value;

  // make an API call using fetch() - include your API key and the user's search term (template strings are your friend)
  
  const apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchInput}`;

  const response = await fetch(apiUrl);
  
  // convert your response data into .json()

  const data = await response.json();

  // print your data to the console to see its format, dont forget to delete later

  // clear out all gifs from previous searches

  const giphyResultsDiv = document.getElementById("giphy-results");

  giphyResultsDiv.innerHTML = "";

  // use a loop to create and append each image to the dom

  for (let i = 0; i < data.data.length; i++) {

  const newImageTag = document.createElement("img");
  newImageTag.setAttribute("src", data.data[i].images.fixed_width.url);
  giphyResultsDiv.appendChild(newImageTag);  
  }
  

};

// dont forget your event listener

document.querySelector("input[type=submit]").addEventListener('click', giphySearch);

