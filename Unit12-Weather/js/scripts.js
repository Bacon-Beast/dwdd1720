// references to the html 
const parentTag = document.querySelector('#weatherCard')


//writing a default zipcode
let zip = localStorage.getItem('myZipCode')
if (zip == null) {
    let defaultZip = "83127"
    localStorage.setItem('myZipCode',defaultZip )
    zip = defaultZip
}// end if

console.log(zip)

// setting the path to the aip on weather
const myKey = "6e52a8a7356fb994ebde34328ad87c18"
const myPath = `https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=${myKey}&units=imperial`
// fetch the remote jsin datafor the current weather
fetch(myPath)
.then((response) => response.json())
.then((allData) => {
    //console.log(allData)
    currentWeather(allData)
})
//function that displays the current weather
function currentWeather(weatherResults) {
    console.log(weatherResults)
    console.log(weatherResults.weather[0].icon)

//add the correct town name
const myTown = document.querySelector('#town')
myTown.textContent = `Weather for ${weatherResults.name}`

//current date
const myDate = document.createElement('p')
myDate.className = "date"
const d = new Date()
myDate.textContent = d.toDateString()
parentTag.appendChild(myDate)
//current icon
    const myWeatherIcon = document.createElement('img')
    myWeatherIcon.src = `https://openweathermap.org/img/wn/${weatherResults.weather[0].icon}@2x.png`
    myWeatherIcon.alt = weatherResults.weather[0].description
    parentTag.appendChild(myWeatherIcon)
    //current temp
    const myCurrentTemp = document.createElement('p')
    myCurrentTemp.className = "temperature"
    myCurrentTemp.innerHTML = weatherResults.main.temp + "&deg;F"
    parentTag.appendChild(myCurrentTemp)
}// end of the current weather

// ask for a new zipcode
const theModalBox = document.querySelector('aside')
const theSettings = document.querySelector('#settings')
theSettings.addEventListener('click', () => {
    theModalBox.classList.toggle('show')
})

//set the new zip
const myButton = document.querySelector('#applyZip')
myButton.addEventListener('click', () => {
    console.log("you clicked me")
    theModalBox.className = ""
    let theZipCode = document.querySelector('#newZip').value
    if (theZipCode.length === 5) {
    localStorage.setItem('myZipCode',theZipCode )
}
window.location.reload()
})




// data validation for the zipcode
myInput = document.querySelector('#newZip')
myInput.addEventListener('input', () => {
    myInput.value = myInput.value.slice(0,5)
})