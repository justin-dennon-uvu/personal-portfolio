import { senators } from "../data/senators.js";
import { clearChildren } from "../utils/main.js";

const nav = document.querySelector("nav");
const main = document.querySelector("main");

const allButton = document.createElement("button");
nav.appendChild(allButton);
allButton.addEventListener("click", () => {
  populateMain(senators);
});
allButton.textContent = "All Senators";

const repubButton = document.createElement("button");
nav.appendChild(repubButton);
repubButton.addEventListener("click", () => {
  populateMain(filterSenators(senators, "R"));
});
repubButton.textContent = "Republicans";

function populateMain(senators) {
  clearChildren(main);
  senators.forEach((senator) => {
    let senatorFigure = document.createElement("figure");
    let senatorImg = document.createElement("img");
    let senatorCaption = document.createElement("figcaption");

    senatorImg.src = `https://www.govtrack.us/static/legislator-photos/${senator.govtrack_id}-100px.jpeg`;
    senatorCaption.textContent = senator.first_name;

    senatorFigure.appendChild(senatorImg);
    senatorFigure.appendChild(senatorCaption);
    main.appendChild(senatorFigure);
  });
}

const filterSenators = (senators, politicalParty) => {
  return senators.filter((member) => member.party === politicalParty);
};

populateMain(senators);
