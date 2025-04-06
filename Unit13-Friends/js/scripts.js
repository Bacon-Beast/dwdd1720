import {jojoParts} from "../data/jojo.js"

// Grab the HTML references
const myNav = document.querySelector('nav')
const myViewer = document.querySelector('#viewer')

// Create navigation buttons for each JoJo part
jojoParts.forEach(part => {
    const partBtn = document.createElement('button')
    partBtn.textContent = part.Title
    partBtn.addEventListener('click', () => showPart(part))
    myNav.appendChild(partBtn)
})

function showPart(part) {
    let partSection = document.createElement("section")
    partSection.className = "part-content"
    let partTitle = document.createElement("h2")
    let partProtagonist = document.createElement("p")
    let partAntagonist = document.createElement("p")
    let partChapters = document.createElement("p")
    let partDescription = document.createElement("p")
    let partPhoto = document.createElement("img")
    let partTags = document.createElement('ul')

    partTitle.textContent = part.Title
    partPhoto.src = part.Photo
    partPhoto.alt = part.Title
    partPhoto.onerror = function() {
        this.src = "https://i.imgur.com/JYw5Fy3.png";
        this.alt = "JoJo placeholder image";
    }
    partProtagonist.textContent = `Protagonist: ${part.Protagonist}`
    partAntagonist.textContent = `Antagonist: ${part.Antagonist}`
    partChapters.textContent = `Chapters: ${part.Chapters}`
    partDescription.textContent = part.Description

    part.Tags.forEach(tag => {
        let theTag = document.createElement('li')
        theTag.textContent = tag
        partTags.appendChild(theTag)
    })

    // Assemble the section
    partSection.appendChild(partTitle)
    partSection.appendChild(partPhoto)
    partSection.appendChild(partProtagonist)
    partSection.appendChild(partAntagonist)
    partSection.appendChild(partChapters)
    partSection.appendChild(partDescription)
    partSection.appendChild(partTags)

    myViewer.textContent = ""
    myViewer.appendChild(partSection)
}