import { senators } from "../data/senators.js";
import { clearChildren } from "../utils/main.js";

const nav = document.querySelector("nav");
const main = document.querySelector("main");

const allButton = document.createElement("button");
allButton.textContent = "All Senators";
allButton.addEventListener("click", () => document.location.reload(true));
nav.appendChild(allButton);

const missedButton = document.createElement("button");
missedButton.textContent = "Missed Votes";
missedButton.addEventListener("click", () => missedSort());
nav.appendChild(missedButton);

function populateMain(senators) {
  
  clearChildren(main);
  senators.forEach((senator) => {
    let senatorFigure = document.createElement("figure");
    let senatorImg = document.createElement("img");
    let senatorCaption = document.createElement("figcaption");

    senatorImg.src = `https://www.govtrack.us/static/legislator-photos/${senator.govtrack_id}-100px.jpeg`;
    senatorCaption.textContent = senator.first_name

    senatorFigure.appendChild(senatorImg);
    senatorFigure.appendChild(senatorCaption);
    main.appendChild(senatorFigure);
  });
}

function missedSort() {
  clearChildren(main);
  populateMain((senators).sort((a, b) => a.missed_votes - b.missed_votes).reverse())
}

populateMain(senators);