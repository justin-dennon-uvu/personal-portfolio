import { senators } from '../data/senators.js'

const nav = document.querySelector('nav')
const main = document.querySelector('main')

function populateMain(senators) {
    senators.forEach(senator => {

        let senatorFigure = document.createElement('figure')
        let senatorImg = document.createElement('img')
        let senatorCaption = document.createElement('figcaption')

        senatorImg.src = `https://www.govtrack.us/static/legislator-photos/${senator.govtrack_id}-100px.jpeg`
        senatorCaption.textContent = senator.first_name

        senatorFigure.appendChild(senatorImg)
        senatorFigure.appendChild(senatorCaption)
        main.appendChild(senatorFigure)
    })
}

populateMain(senators)