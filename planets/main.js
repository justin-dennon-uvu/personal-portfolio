import { planets } from '../data/planets.js'
import { clearChildren, urlNumber } from '../utils/main.js'

const planetList = document.querySelector('.planetList')
const info = document.querySelector('.info')

function populateDOM(planets) {
    planets.forEach((planet) => {

        let aWrap = document.createElement('a')
        aWrap.href = '#'
        aWrap.addEventListener('click', () => {

            clearChildren(info)

            let planetName = document.createElement('p')
            planetName.textContent =`name: ${planet.name}`
            info.appendChild(planetName)

            let planetRotationPeriod = document.createElement('p')
            planetRotationPeriod.textContent =`rotation period: ${planet.rotation_period}`
            info.appendChild(planetRotationPeriod)

            let planetOrbitalPeriod = document.createElement('p')
            planetOrbitalPeriod.textContent =`orbital period: ${planet.orbital_period}`
            info.appendChild(planetOrbitalPeriod)

            let planetDiameter = document.createElement('p')
            planetDiameter.textContent = `diameter: ${planet.diameter}`
            info.appendChild(planetDiameter)

            let planetClimate = document.createElement('p')
            planetClimate.textContent = `climate: ${planet.climate}`
            info.appendChild(planetClimate)

            let planetGravity = document.createElement('p')
            planetGravity.textContent = `gravity: ${planet.gravity}`
            info.appendChild(planetGravity)

            let planetTerrain = document.createElement('p')
            planetTerrain.textContent = `terrain: ${planet.terrain}`
            info.appendChild(planetTerrain)

            let planetSurfaceWater = document.createElement('p')
            planetSurfaceWater.textContent = `surface water: ${planet.surface_water}`
            info.appendChild(planetSurfaceWater)

            let planetPopulation = document.createElement('p')
            planetPopulation.textContent = `population: ${planet.population}`
            info.appendChild(planetPopulation)

        })

        let planetFigure = document.createElement('figure')

        let planetImage = document.createElement('img')
        let planetNumber = urlNumber(planet.url)
        planetImage.src = `https://starwars-visualguide.com/assets/img/planets/${planetNumber}.jpg`
        planetImage.addEventListener('error', () => {
            planetFigure.hidden = true
        })

        let listCaption = document.createElement('figcaption')
        listCaption.textContent = planet.name

        aWrap.appendChild(planetFigure)
        planetFigure.appendChild(planetImage)
        planetFigure.appendChild(listCaption)
        planetList.appendChild(aWrap)

    })
}

populateDOM(planets)