const cardView = document.querySelector(".card-view");

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
  getAPIData(`https://pokeapi.co/api/v2/pokemon?limit=25&offset=809`).then(
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
    cardContent.classList.toggle("full-content");
  });
  cardContent.appendChild(populateCardPreview(singlePokemon));
  cardContent.appendChild(populateCardFull(singlePokemon));
  cardSpace.appendChild(cardContent);
  cardView.appendChild(cardSpace);
}

function populateCardPreview(pokemon) {
  let cardPreview = document.createElement("div");
  cardPreview.className = "card card-preview";
  let cardPreviewName = document.createElement("p");
  cardPreviewName.textContent = pokemon.name;
  let cardPreviewImage = document.createElement("img");
  cardPreviewImage.src = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokemon.id}.png`;
  cardPreview.appendChild(cardPreviewImage);
  cardPreview.appendChild(cardPreviewName);
  return cardPreview;
}

function populateCardFull(pokemon) {
  let cardFull = document.createElement("div");
  cardFull.className = "card card-full";
  let cardFullNumber = document.createElement("p");
  cardFullNumber.textContent = `PokeDex Number: ${pokemon.id}`;
  cardFull.appendChild(cardFullNumber);
  return cardFull;
}

populateCardview();
