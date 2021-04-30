const cardView = document.querySelector(".card-view");
const newButton = document.querySelector(".custom-pokemon");

// custom pokemon constructor
class Pokemon {
  constructor(name, type, type2, height, weight) {
    this.id = 899;
    this.name = name;
    this.type = type;
    this.type2 = type2;
    this.height = height;
    this.weight = weight;
  }
}

// button to create new pokemon
newButton.addEventListener("click", () => {
  let pokeName = prompt("What is the name of your new Pokemon?");
  let pokeType = prompt("Pokemon type?");
  let pokeType2 = prompt("Second type?");
  let pokeHeight = prompt("Height?");
  let pokeWeight = prompt("Weight?");
  alert(
    "Your new Pokemon has been made! It can be found at the bottom of the page."
  );
  let newPokemon = new Pokemon(
    pokeName,
    pokeType,
    pokeType2,
    pokeHeight,
    pokeWeight
  );
  populatePokemonCards(newPokemon);
});

// get pokemon info from api
async function getAPIData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

// extract info from desired pokemon
function populateCardview() {
  getAPIData(`https://pokeapi.co/api/v2/pokemon?limit=89&offset=809`).then(
    async (data) => {
      for (const singlePokemon of data.results) {
        await getAPIData(singlePokemon.url).then((pokemonData) =>
          populatePokemonCards(pokemonData)
        );
      }
    }
  );
}

// create pokemon card element
function populatePokemonCards(singlePokemon) {
  let cardSpace = document.createElement("div");
  cardSpace.className = "cardSpace";
  let cardContent = document.createElement("div");
  cardContent.className = "cardContent";
  cardContent.addEventListener("click", () => {
    cardContent.classList.toggle("back-content");
  });
  cardContent.appendChild(populateCardFront(singlePokemon));
  cardContent.appendChild(populateCardBack(singlePokemon));
  cardSpace.appendChild(cardContent);
  cardView.appendChild(cardSpace);
}

// pokemon card front elements
function populateCardFront(pokemon) {
  let cardFront = document.createElement("div");
  cardFront.className = "card card-front";
  let cardFrontName = document.createElement("div");
  cardFrontName.className = "card-front-name";
  let cardFrontNameText = document.createElement("p");
  cardFrontNameText.textContent = pokemon.name;
  let cardFrontNameType = document.createElement("img");
  cardFrontNameType.src = getTypeImage(pokemon);
  cardFrontNameType.className = "type-1";
  let cardFrontNameType2 = document.createElement("img");
  cardFrontNameType2.src = getTypeImage2(pokemon);
  cardFrontNameType2.className = "type-2";
  let cardFrontImage = document.createElement("img");
  cardFrontImage.src = getImage(pokemon);
  cardFrontName.appendChild(cardFrontNameText);
  cardFrontName.appendChild(cardFrontNameType);
  cardFrontName.appendChild(cardFrontNameType2);
  cardFront.appendChild(cardFrontImage);
  cardFront.appendChild(cardFrontName);
  return cardFront;
}

// pokemon card back elements
function populateCardBack(pokemon) {
  let cardBack = document.createElement("div");
  cardBack.className = "card card-back";
  let cardBackContent = document.createElement("div");
  cardBackContent.className = "card-back-content";
  let cardBackNumber = document.createElement("p");
  cardBackNumber.textContent = `PokeDex Number: ${pokemon.id}`;
  let cardBackHeight = document.createElement("p");
  cardBackHeight.textContent = `Height: ${pokemon.height}`;
  let cardBackWeight = document.createElement("p");
  cardBackWeight.textContent = `Weight: ${pokemon.weight}`;
  cardBackContent.appendChild(cardBackNumber);
  cardBackContent.appendChild(cardBackHeight);
  cardBackContent.appendChild(cardBackWeight);
  cardBack.appendChild(cardBackContent);
  return cardBack;
}

// obtain pokemon image url from pokemon id
function getImage(pokemon) {
  let pokeID;
  if (pokemon.id < 899) pokeID = pokemon.id;
  if (pokemon.id === 899) {
    return `../images/pokeball.png`;
  }
  return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokeID}.png`;
}

// obtain type image url from pokemon type
function getTypeImage(pokemon) {
  if (pokemon.id < 899) {
    return `../images/${pokemon.types[0].type.name}.svg`;
  } else {
    return `../images/${pokemon.type}.svg`;
  }
}

// obtain secondary type image url from secondary pokemon type
function getTypeImage2(pokemon) {
  if (pokemon.id === 899) {
    return `../images/${pokemon.type2}.svg`;
  }
  if (pokemon.types[1]) {
    return `../images/${pokemon.types[1].type.name}.svg`;
  }
}

populateCardview();
