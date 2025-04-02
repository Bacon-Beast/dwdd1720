//add links to the html
const myNavigation = document.querySelector('nav')
const myViewer = document.querySelector('main')



//go grab the data and then WAIT for the result.
fetch("../Unit11/data/starships (2).json")
    .then((response) => response.json ())
    .then((shipArray) => {
        console.log(shipArray)
        populateNav(shipArray)
    })


   //populate the nav bar
   function populateNav(allShips) {
    console.log(allShips)
    allShips.forEach(ship => {
        let myButton = document.createElement('button')
        console.log(ship.name)
        myButton.textContent = ship.name
        myButton.addEventListener('click', () => showShip(ship))
        myNavigation.appendChild(myButton)
    })//end of loop

   } //end of nav populate

   // ship viewer

   function showShip(shipData) {
    console.log(shipData)
    //create a figure an its parts
    let myFigure = document.createElement('figure')
    let myImage = document.createElement('img')
    let myCaption = document.createElement('figcaption')
    
    //assign data to the figure
    console.log(shipData.url)
    let urlArray = shipData.url.split('/')
    console.log(urlArray[5])
    myImage.src=`https://starwars-visualguide.com/assets/img/starships/${urlArray[5]}.jpg`
    myCaption.textContent = shipData.name

//error checking for image
    myImage.addEventListener('error', () => {
        myImage.src = "https://starwars-visualguide.com/assets/img/big-placeholder.jpg"
        myCaption.textContent = `The ${shipData.name} was destroyed in a recent battle` 
    })

    //assemble the figure
    myFigure.appendChild(myImage)
    myFigure.appendChild(myCaption)

    //add the figure to the html
    myViewer.textContent = ''
    myViewer.appendChild(myFigure)

   } // end viewer  