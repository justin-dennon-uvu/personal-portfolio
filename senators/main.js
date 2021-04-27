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
  populateMain(filterParty(senators, "R"));
});
repubButton.textContent = "Republicans";

const demButton = document.createElement("button");
nav.appendChild(demButton);
demButton.addEventListener("click", () => {
  populateMain(filterParty(senators, "D"));
});
demButton.textContent = "Democrats";

const femaleButton = document.createElement('button')
nav.appendChild(femaleButton)
femaleButton.addEventListener('click', () => {
  populateMain(filterGender(senators, "F"))
})
femaleButton.textContent = 'Female Senators'

const maleButton = document.createElement('button')
nav.appendChild(maleButton)
maleButton.addEventListener('click', () => {
  populateMain(filterGender(senators, "M"))
})
maleButton.textContent = 'Male Senators'

function populateMain(senators) {
  clearChildren(main);
  senators.forEach((senator) => {
    let senatorFigure = document.createElement("figure");
    let senatorImg = document.createElement("img");
    let senatorCaption = document.createElement("figcaption");

    senatorImg.src = `https://www.govtrack.us/static/legislator-photos/${senator.govtrack_id}-200px.jpeg`;
    senatorCaption.textContent = namePrefix(senators, `M`) + " " + senator.first_name;

    senatorFigure.appendChild(senatorImg);
    senatorFigure.appendChild(senatorCaption);
    main.appendChild(senatorFigure);
  });
}

const filterParty = (senators, politicalParty) => {
  return senators.filter((member) => member.party === politicalParty);
};

const filterGender = (senators, senatorGender) => {
  return senators.filter((member) => member.gender === senatorGender);
};

const namePrefix = (senators, senatorGender) => {
  if (senatorGender === 'F') {
    return 'Mrs.'
  }
  if (senatorGender === 'M') {
    return 'Mr.'
  }
}

populateMain(senators);
