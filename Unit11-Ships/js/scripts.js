// add links to the html
const myNavigation = document.querySelector('nav');
const myViewer = document.querySelector('main');

//go grab the data and then W A I T for the result.
fetch("starships.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then((shipArray) => {
    console.log(shipArray);
    populateNav(shipArray);
  })
  .catch((error) => {
    console.error('Error loading starships:', error);
    document.querySelector('.loading').textContent = 'Failed to load starships. Please try again later.';
  });

// populate the nav bar
function populateNav(allShips) {
  console.log(allShips);
  allShips.forEach(ship => {
    let myButton = document.createElement('button');
    console.log(ship.name);
    myButton.textContent = ship.name;
    myButton.addEventListener('click', () => showShip(ship));
    myNavigation.appendChild(myButton);
  }); // end of loop
} // end of nav populate


// ship viewer
function showShip(shipData) {
  console.log(shipData);

  // Create a figure and its parts
  let myFigure = document.createElement('figure');
  let myImage = document.createElement('img');
  let myCaption = document.createElement('figcaption');

 // assign data to the figure
 console.log(shipData.url);
 let urlArray = shipData.url.split('/');
 console.log(urlArray[5]);
 myImage.src = `https://starwars.dgmuvu.com/ships/${urlArray[5]}.jpg`;
 myCaption.textContent = shipData.name;

// error checking for image
myImage.addEventListener('error', () => {
  myImage.src = "https://starwars.dgmuvu.com/ships/placeholder.jpg";
  myCaption.textContent = `The ${shipData.name} was destroyed in battle`;
});

  // assemble the figure
  myFigure.appendChild(myImage);
  myFigure.appendChild(myCaption);

  // add the figure to the html
  myViewer.textContent = '';
  myViewer.appendChild(myFigure);
}