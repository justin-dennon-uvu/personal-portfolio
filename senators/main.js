import { senators } from "../data/senators.js";
import { clearChildren } from "../utils/main.js";

const nav = document.querySelector("nav");
const main = document.querySelector("main");

const allButton = document.createElement("button");
allButton.textContent = "All Senators";
allButton.addEventListener("click", () => populateMain(senators));
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
    senatorCaption.textContent = senator.first_name + " " + senator.missed_votes;

    senatorFigure.appendChild(senatorImg);
    senatorFigure.appendChild(senatorCaption);
    main.appendChild(senatorFigure);
  });
}

function missedSort() {
  clearChildren(main);
  populateMain((senators).sort((a, b) => a.missed_votes - b.missed_votes).reverse())
}

// function populateMissed(totalMissed) {
//   clearChildren(main);
//   totalMissed.forEach((senator) => {
//     let missedFigure = document.createElement("figure");
//     let missedImg = document.createElement("img");
//     let missedCaption = document.createElement("figcaption");

//     missedImg.src = `https://www.govtrack.us/static/legislator-photos/${senator.govtrack_id}-100px.jpeg`;
//     missedCaption.textContent = senator.first_name + " " + senator.missed_votes;

//     missedFigure.appendChild(missedImg);
//     missedFigure.appendChild(missedCaption);
//     main.appendChild(missedFigure);
//   });
// }

// let totalMissed = senators.filter((senator) => senator.missed_votes);

populateMain(senators);