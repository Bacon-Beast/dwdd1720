import {allSenators} from '../data/senators.js'
console.log(allSenators);

//tag the HTML elements
const  myNavigation = document.querySelector('nav');
const  myParent = document.querySelector('#allCards');

// create an all people button
const btnAll = document.createElement('button')
btnAll.textContent = "All People"
btnAll.addEventListener('click', () => displayPeople(allSenators));


//event listener and filter for the women
const btnFemale = document.createElement('button');
btnFemale.textContent = 'Women'
btnFemale.addEventListener('click', () => {
    const femaleSenators = allSenators.filter (person => person.gender === 'F')
    displayPeople(femaleSenators)})




//event listener and filter for the men
 const btnMale = document.createElement('button');
    btnMale.textContent = 'Men'
    btnMale.addEventListener('click', () => {
        const maleSenators = allSenators.filter (person => person.gender === 'M')
        displayPeople(maleSenators)})




//event listener and filter for the republican
const btnRepublican = document.createElement('button');
btnRepublican.textContent = 'Republican'
btnRepublican.addEventListener('click', () => {
    const republicanSenators = allSenators.filter (person => person.party === 'R')
    displayPeople(republicanSenators)})




//event listener and filter for the democrat
const btnDemocrat = document.createElement('button');
btnDemocrat.textContent = 'Democrat'
btnDemocrat.addEventListener('click', () => {
    const democratSenators = allSenators.filter (person=> person.party === 'D')
    displayPeople(democratSenators)})




// add buttons to page
myNavigation.appendChild(btnAll)
myNavigation.appendChild(btnFemale)
myNavigation.appendChild(btnMale)
myNavigation.appendChild(btnRepublican)
myNavigation.appendChild(btnDemocrat)

// loop through all the people
function displayPeople (x) {
    myParent.textContent = ""
    x.forEach(person => {
        const myFigure = document.createElement('figure')

        const myImage = document.createElement('img')
        console.log(person.govtrack_id)
        const explodedArray = person.govtrack_id.split('/')
        console.log(explodedArray)
        const charNumber = explodedArray[0]
        myImage.src=`//www.govtrack.us/static/legislator-photos/${charNumber}.jpeg`
        myImage.alt = person.first_name
        const  imageSize= `-50px.jpeg`
        const myCaption = document.createElement('figcaption')
        myCaption.textContent = person.first_name +" "+ person.last_name +" "+"from"+" "+ person.state+" "+ "is a "+ person.party +"."+" "+"Fax:"+" "+ person.fax
        
        

//assemble the parts
myFigure.appendChild(myImage)
myFigure.appendChild(myCaption)
myParent.appendChild(myFigure)


console.log(person.gender)
switch (person.gender) {
    case "F":
    myFigure.className = "female"
    break;
    case "M":
    myFigure.className = "male"
}
console.log(person.party)
switch (person.party) {
    case "R":
    myFigure.className = "republican"
    break;
    case "D":
    myFigure.className = "democrat"
}

    }// end of fat arrow

    )//end of loop


} //end of function

//casll function
displayPeople(allSenators);