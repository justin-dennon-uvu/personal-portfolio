import { senators } from "../data/senators.js";
import { clearChildren } from "../utils/main.js";

const nav = document.querySelector("nav");
const main = document.querySelector("main");

// creating buttons
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

const oldestSenatorButton = document.createElement('button')
nav.appendChild(oldestSenatorButton)
oldestSenatorButton.addEventListener('click', () => {
  populateMain(oldestSenator(senators))
})
oldestSenatorButton.textContent = 'Oldest Senator'

// creating senator figures
function populateMain(senators) {
  clearChildren(main);
  senators.forEach((senator) => {
    let senatorFigure = document.createElement("figure");
    let senatorImg = document.createElement("img");
    let senatorCaption = document.createElement("figcaption");
    let birthYear = senator.date_of_birth.substring(0,4);

    senatorImg.src = `https://www.govtrack.us/static/legislator-photos/${senator.govtrack_id}-200px.jpeg`;
    senatorCaption.textContent = senator.first_name + " " + senator.last_name + " " + `(${birthYear})`;

    senatorFigure.appendChild(senatorImg);
    senatorFigure.appendChild(senatorCaption);
    main.appendChild(senatorFigure);
  });
}

// filter senators by party
const filterParty = (senators, politicalParty) => {
  return senators.filter((member) => member.party === politicalParty);
};

// filter senators by gender
const filterGender = (senators, senatorGender) => {
  return senators.filter((member) => member.gender === senatorGender);
};

// reduce function to filter oldest senator
const oldestSenator = (senators) => {
  const oldestSenateMember = senators.reduce((acc, member) => acc.date_of_birth < member.date_of_birth ? acc : member)
   return senators.filter((person) => person.date_of_birth === oldestSenateMember.date_of_birth)
}

populateMain(senators);