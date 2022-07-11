// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {

    // Here is the HTML formatting for our mission target div.
//    missionTarget


let missionTarget = document.getElementById("missionTarget");
 missionTarget.innerHTML = 
 
                `<h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name} </li>
                    <li>Diameter: ${diameter} </li>
                    <li>Star: ${star} </li>
                    <li>Distance from Earth: ${distance} </li>
                    <li>Number of Moons: ${moons} </li>
                </ol> 
                <img src="${imageUrl} ">`

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
    //    window.addEventListener("load"), function() {
            // let form = document.querySelector("form");
            // form.addEventListener("submit"), function(event) {
                // let pilotNameInput = document.querySelector("input[name=pilotName]");
                // let copilotNameInput = document.querySelector("input[name=copilotName]");
                // let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
                // let cargoMassInput = document.querySelector("input[name=cargoMass]");


                let pilotStatus = document.getElementById("pilotStatus");
                let copilotStatus = document.getElementById("copilotStatus");
                let fuelStatus = document.getElementById("fuelStatus");
                let cargoStatus = document.getElementById("cargoStatus");

                ///vaidlation conditionals
                if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {
                    alert("Missing Information. Cannot be empty!"); 
                }   else if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number") {
                    alert("Must be in letters!"); 
                }   else if (validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a number") {
                    alert("Must be in numbers!");
                    // event.preventDefault();
                    } else {
                    // get rid of validations now. List means faultyitems
                // if (pilot != "Empty" && copilot != "Empty") {
                    //console.log(pilotNameInput.value + "," + copilotNameInput.value + " is ready");
                    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
                    copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
                
                // if (fuelLevel < 10000) {
                //     faultyItems = "visible";
                
                // if (validateInput(fuelLevel) === isNaN && validateInput(cargoLevel) === isNaN) {
                if (fuelLevel < 10000 && cargoLevel > 10000) {
                    fuelStatus.innerHTML = `Not enough fuel for the journey`;
                    cargoStatus.innerHTML = `${cargoLevel} is too much mass for launch!`;
                    launchStatus.innerHTML = `Shuttle cannot launch!`
                    launchStatus.style.color = "red";
                } else if (fuelLevel > 10000 && cargoLevel < 10000) {
                    fuelStatus.innerHTML = `Enough fuel for the journey`;
                    cargoStatus.innerHTML = `${cargoLevel} is under weight limit`;
                    launchStatus.innerHTML = `Shuttle is ready for launch!`
                    launchStatus.setAttritbute('style', 'background-color: green');
                    launchStatus.style.color = "green";
                } else if (fuelLevel < 10000 && cargoLevel < 10000) {
                    fuelStatus.innerHTML = 'Not enough fuel for the journey';
                    cargoStatus.innerHTML = `${cargoLevel} is under the weight limit`;
                    launchStatus.innerHTML = 'Shuttle cannot launch!'
                    launchStatus.style.color = "red";
                }  else if (fuelLevel > 10000 && cargolevel > 10000) {
                    fuelStatus.innerHTML = 'Enough fuel for the journey';
                    cargoStatus.innerHTML = `${cargoLevel} is too much mass for launch!`;
                    launchStatus.style.color = "red";
                    // launchStatus.setAttritbute('style', 'background-color: red');
                }
                }
            }
// definte and create the items here. Defining personality THEN it will be called in the scriptjs file. Validate first then call in the values here to set a specific action to work

    //making the texts change

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
    return response.json()        
});

    return planetsReturned;
}

function pickPlanet(planets) {
    let index = Math.floor(planets.length * Math.random())
    return planets[index]
    }


module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
