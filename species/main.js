import { species } from '../data/species.js'

/* let itemOne = document.querySelector('#item1')
let itemTwo = document.querySelector('#item2')
itemOne.textContent = films[2].title
itemTwo.textContent = films[1].title */

//console.log(films[0].title)

let speciesList = document.querySelector('.speciesList')

for (let i = 0; i < species.length; i++) {
    const foundSpecies = species.find(species => getLastNumber(species.url) === (i + 1))
    let figure = document.createElement('figure')
    let newImage = document.createElement('img')
    let figCaption = document.createElement('figcaption')
    newImage.src = `https://starwars-visualguide.com/assets/img/species/${i + 1}.jpg`
    figCaption.textContent = foundSpecies.name
    
    figure.appendChild(newImage)
    figure.appendChild(figCaption)
    speciesList.appendChild(figure)

}
 
function getLastNumber(url) {
    let end = url[url.length - 2]
    return parseInt(end, 10)
}