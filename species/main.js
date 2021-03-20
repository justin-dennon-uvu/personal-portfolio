import { species } from '../data/species.js'

const speciesList = document.querySelector('.speciesList')
const header = document.querySelector('header')

// buttons

const oneButton = document.createElement('button')
oneButton.textContent = 'Episode 1'
oneButton.addEventListener('click', () => populateDOM(episodeOneSpecies))
header.appendChild(oneButton)

const episodeOneSpecies = species.filter(creature => creature.films.includes("https://swapi.co/api/films/1/"))

const twoButton = document.createElement('button')
twoButton.textContent = 'Episode 2'
twoButton.addEventListener('click', () => populateDOM(episodeTwoSpecies))
header.appendChild(twoButton)

const episodeTwoSpecies = species.filter(creature => creature.films.includes("https://swapi.co/api/films/2/"))

const threeButton = document.createElement('button')
threeButton.textContent = 'Episode 3'
threeButton.addEventListener('click', () => populateDOM(episodeThreeSpecies))
header.appendChild(threeButton)

const episodeThreeSpecies = species.filter(creature => creature.films.includes("https://swapi.co/api/films/3/"))

const fourButton = document.createElement('button')
fourButton.textContent = 'Episode 4'
fourButton.addEventListener('click', () => populateDOM(episodeFourSpecies))
header.appendChild(fourButton)

const episodeFourSpecies = species.filter(creature => creature.films.includes("https://swapi.co/api/films/4/"))

const fiveButton = document.createElement('button')
fiveButton.textContent = 'Episode 5'
fiveButton.addEventListener('click', () => populateDOM(episodeFiveSpecies))
header.appendChild(fiveButton)

const episodeFiveSpecies = species.filter(creature => creature.films.includes("https://swapi.co/api/films/5/"))

const sixButton = document.createElement('button')
sixButton.textContent = 'Episode 6'
sixButton.addEventListener('click', () => populateDOM(episodeSixSpecies))
header.appendChild(sixButton)

const episodeSixSpecies = species.filter(creature => creature.films.includes("https://swapi.co/api/films/6/"))

const sevenButton = document.createElement('button')
sevenButton.textContent = 'Episode 7'
sevenButton.addEventListener('click', () => populateDOM(episodeSevenSpecies))
header.appendChild(sevenButton)

const episodeSevenSpecies = species.filter(creature => creature.films.includes("https://swapi.co/api/films/7/"))

// const allButton = document.createElement('button')
// allButton.textContent = 'All'
// sevenButton.addEventListener('click', () => populateDOM(species))
// header.appendChild(allButton)

// end buttons

function populateDOM(species) {
    clearSpecies(speciesList)
    species.forEach((creature) => {

        let creatureFigure = document.createElement('figure')

        let creatureImage = document.createElement('img')
        let creatureNumber = urlNumber(creature.url)
        creatureImage.src = `https://starwars-visualguide.com/assets/img/species/${creatureNumber}.jpg`

        let listCaption = document.createElement('figcaption')
        listCaption.textContent = creature.name

        creatureFigure.appendChild(creatureImage)
        creatureFigure.appendChild(listCaption)
        speciesList.appendChild(creatureFigure)

    })
}


function urlNumber(url) {
    let end = url.lastIndexOf('/')
    let start = end - 2
    if (url.charAt(start) === '/') {
        start++
    }
    return url.slice(start, end)
}

function clearSpecies(container) {
    while (container.firstChild) {
        container.removeChild(container.firstChild)
    }
}


populateDOM(species)