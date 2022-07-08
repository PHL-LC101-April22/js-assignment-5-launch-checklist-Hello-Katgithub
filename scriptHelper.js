// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
//     {
//         "name": "Jupiter/Europa",
//         "diameter": "3,121.6 km",
//         "star": "Sol",
//         "distance": "628.3 million km from Earth",
//         "image": "https://apod.nasa.gov/apod/image/1609/Europa_Galileo_960.jpg",
//         "moons": 0
//     }
// ]
    // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {
    let numberInput = Number(testInput);
    if (testInput === "")
    {
        return "Empty";
    }
    else if (isNaN(numberInput))
    {
        return "Not A Number";
    }
    else if (isNaN(numberInput) === false);
    {
        return "Is A Number";
    }

};
    

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
       window.addEventListener("load", function() {
            let form = document.querySelector("form");
            form.addEventListener("submit", function(event) {
                let pilotNameInput = document.querySelector("input[name=pilotName]");
                let copilotNameInput = document.querySelector("input[name=copilotName]");
                let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
                let cargoMassInput = document.querySelector("input[name=cargoMass]");
                if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty")
                    alert("Missing Information. Cannot be empty!");
                if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number") 
                    alert("Must be in letters!");
                if (validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a number") {
                    alert("Must be in numbers!");
                    event.preventDefault();
                }
                
                    // get rid of validations now. List means faultyitems
                if (pilot != "Empty" && copilot != "Empty") {
                    //console.log(pilotNameInput.value + "," + copilotNameInput.value + " is ready");
                    pilotStatus.innerhtml = `Pilot ${pilotNameInput.value}$ is ready for launch`;
                    copilotStatus.innerhtml = `Co-pilot ${copilotNameInput.value}$ is ready for launch`;
                }
                // if (validateInput(fuelLevel) === isNaN && validateInput(cargoLevel) === isNaN) {
                if (fuelLevel < 10000 && cargoLevel > 10000) {
                    fuelLevelInput.innerhtml = `Not enough fuel for the journey`;
                    cargoLevelInput.innerhtml = `${cargolevelInput.value} is too much mass for launch!`;
                    launchStatus.innerhtml = `Shuttle cannot launch!`

                    launchStatus.setAttribute('style, background-color: red');
                }
                if (fuelLevel > 10000 && cargoLevel < 10000) {
                    fuelLevelInput.innerhtml = `Enough fuel for the journey`;
                    cargoLevelInput.innerhtml = `${cargoLevelInput.value} is under weight limit`;
                    launchStatus.innerhtml = `Shuttle is ready for launch!`
                    launchStatus.setAttritbute('style, background-color: green');
                    //console.log(Ready for Launch)
                }
            });
        });
    }
// definte and create the items here. Defining personality THEN it will be called in the scriptjs file. Validate first then call in the values here to set a specific action to work

    //making the texts change

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
