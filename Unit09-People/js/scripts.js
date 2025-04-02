/**
 * @typedef {Object} Person
 * @property {string} name
 * @property {string} height
 * @property {string} mass
 * @property {string} hair_color
 * @property {string} skin_color
 * @property {string} eye_color
 * @property {string} gender
 * @property {string} url
 */

/** @type {Person[]} */
import { people } from '../data/people.js'

// Store all created figures
const figures = [];

function createFigure(person) {
    const figure = document.createElement('figure');
    const img = document.createElement('img');
    const caption = document.createElement('figcaption');
    
    const personId = person.url.match(/\/(\d+)\/$/)[1];
    img.src = `https://starwars.dgmuvu.com/characters/${personId}.jpg`;
    img.alt = person.name;
    caption.textContent = person.name;

    // Assign gender class
    switch (person.gender) {
        case "female":
            figure.className = "female";
            break;
        case "male":
            figure.className = "male";
            break;
        default:
            figure.className = "other";
    }

    figure.appendChild(img);
    figure.appendChild(caption);
    return figure;
}

function filterPeople(gender) {
    figures.forEach(figure => {
        const shouldShow = gender === 'all' || figure.classList.contains(gender);
        figure.style.display = shouldShow ? 'block' : 'none';
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('peopleHere');
    if (!container) throw new Error('People container not found');

    // Create all figures initially
    people.forEach(person => {
        const figure = createFigure(person);
        container.appendChild(figure);
        figures.push(figure);
    });

    // Set up filter buttons
    document.getElementById('all').addEventListener('click', () => filterPeople('all'));
    document.getElementById('female').addEventListener('click', () => filterPeople('female'));
    document.getElementById('male').addEventListener('click', () => filterPeople('male'));
    document.getElementById('other').addEventListener('click', () => filterPeople('other'));
});