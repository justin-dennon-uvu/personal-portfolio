import { species } from '../data/species.js'

const speciesList = document.querySelector('.speciesList')
const header = document.querySelector('header')


const oneButton = document.createElement('button')
oneButton.textContent = 'Episode 1'
oneButton.addEventListener('click', () => populateDOM(episodeOneSpecies))
header.appendChild(oneButton)

const episodeOneSpecies = species.filter(creature => creature.films.includes("https://swapi.co/api/films/1/"))


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