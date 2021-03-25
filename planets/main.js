import { planets } from '../data/planets.js'
import { clearChildren, urlNumber } from '../utils/main.js'

const planetList = document.querySelector('.planetList')
const info = document.querySelector('.info')

function populateDOM(planets) {
    clearChildren(planetList)
    planets.forEach((planet) => {

        let planetFigure = document.createElement('figure')

        let planetImage = document.createElement('img')
        let planetNumber = urlNumber(planet.url)
        planetImage.src = `https://starwars-visualguide.com/assets/img/planets/${planetNumber}.jpg`

        let listCaption = document.createElement('figcaption')
        listCaption.textContent = planet.name

        planetFigure.appendChild(planetImage)
        planetFigure.appendChild(listCaption)
        planetList.appendChild(planetFigure)

    })
}

populateDOM(planets)
console.log('test')