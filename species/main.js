import { species } from '../data/species.js'

const speciesList = document.querySelector('.speciesList')
const nav = document.querySelector('nav')

// buttons

const allButton = document.createElement('button')
allButton.textContent = 'All'
allButton.addEventListener('click', () => populateDOM(species))
nav.appendChild(allButton)

const fourButton = document.createElement('button')
fourButton.textContent = 'Episode I'
fourButton.addEventListener('click', () => populateDOM(episodeFourSpecies))
nav.appendChild(fourButton)

const episodeFourSpecies = species.filter(creature => creature.films.includes("https://swapi.co/api/films/4/"))

const fiveButton = document.createElement('button')
fiveButton.textContent = 'Episode II'
fiveButton.addEventListener('click', () => populateDOM(episodeFiveSpecies))
nav.appendChild(fiveButton)

const episodeFiveSpecies = species.filter(creature => creature.films.includes("https://swapi.co/api/films/5/"))

const sixButton = document.createElement('button')
sixButton.textContent = 'Episode III'
sixButton.addEventListener('click', () => populateDOM(episodeSixSpecies))
nav.appendChild(sixButton)

const oneButton = document.createElement('button')
oneButton.textContent = 'Episode IV'
oneButton.addEventListener('click', () => populateDOM(episodeOneSpecies))
nav.appendChild(oneButton)

const episodeOneSpecies = species.filter(creature => creature.films.includes("https://swapi.co/api/films/1/"))

const twoButton = document.createElement('button')
twoButton.textContent = 'Episode V'
twoButton.addEventListener('click', () => populateDOM(episodeTwoSpecies))
nav.appendChild(twoButton)

const episodeTwoSpecies = species.filter(creature => creature.films.includes("https://swapi.co/api/films/2/"))

const threeButton = document.createElement('button')
threeButton.textContent = 'Episode VI'
threeButton.addEventListener('click', () => populateDOM(episodeThreeSpecies))
nav.appendChild(threeButton)

const episodeThreeSpecies = species.filter(creature => creature.films.includes("https://swapi.co/api/films/3/"))

const episodeSixSpecies = species.filter(creature => creature.films.includes("https://swapi.co/api/films/6/"))

const sevenButton = document.createElement('button')
sevenButton.textContent = 'Episode VII'
sevenButton.addEventListener('click', () => populateDOM(episodeSevenSpecies))
nav.appendChild(sevenButton)

const episodeSevenSpecies = species.filter(creature => creature.films.includes("https://swapi.co/api/films/7/"))

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