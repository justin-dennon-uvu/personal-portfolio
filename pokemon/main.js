const cardView = document.querySelector(".card-view");

const newButton = document.querySelector(".custom-pokemon");

class Pokemon {
  constructor(name, height, weight, abilities, moves) {
    this.id = 850;
    this.name = name;
    this.height = height;
    this.weight = weight;
    this.abilities = abilities;
    this.moves = moves;
  }
}

newButton.addEventListener("click", () => {
  let pokeName = prompt("What is the name of your new Pokemon?");
  let pokeHeight = prompt("Pokemon height?");
  let pokeWeight = prompt("Pokemon weight?");
  let newPokemon = new Pokemon(
    pokeName,
    pokeHeight,
    pokeWeight,
    ["eat", "sleep"],
    ["study", "code", "silence"]
  );
  populatePokemonCards(newPokemon);
});

async function getAPIData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

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

function populateCardFront(pokemon) {
  let cardFront = document.createElement("div");
  cardFront.className = "card card-front";
  let cardFrontName = document.createElement("div");
  // cardFrontName.className = "card-front-name";
  // cardFrontName.innerHTML = `<p>${pokemon.name}</p><img class="type-img" style="width: 16px;" src="../images/${pokemon.types[0].type.name}.svg">`;
  let cardFrontImage = document.createElement("img");
  cardFrontImage.src = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokemon.id}.png`;
  cardFront.appendChild(cardFrontImage);
  // cardFront.appendChild(cardFrontName);
  return cardFront;
}

function populateCardBack(pokemon) {
  let cardBack = document.createElement("div");
  cardBack.className = "card card-back";
  let cardBackNumber = document.createElement("p");
  cardBackNumber.textContent = `PokeDex Number: ${pokemon.id}`;
  cardBack.appendChild(cardBackNumber);
  return cardBack;
}

populateCardview()
