// Write your JavaScript code here!

// const { myFetch } = require("./scriptHelper");

// const { formSubmission, addDestinationInfo } = require("./scriptHelper");

window.addEventListener("load", function() {


   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch()
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       let planet = pickPlanet(listedPlanets);
        addDestinationInfo(document, planet.name, planet.diameter, planet.star, planet.distance, planet.moons, planet.image)

   })
   //Call the function like you would call a variable!
//    these are more associated with the variables 
   let form = document.querySelector("form")
   form.addEventListener("submit", function(event) {

   let pilotName = document.querySelector("input[name=pilotName]");
   let pilot = pilotName.value;

   let copilotName = document.querySelector("input[name=copilotName]");
   let copilot = copilotName.value;

   let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
   let fuelLevel = fuelLevelInput.value;

   let cargoMassInput = document.querySelector("input[name=cargoMass");
   let cargoLevel = cargoMassInput.value

   //add the list and stuff from scriptHelper
    let list = document.getElementById("faultyItems")

   event.preventDefault();
   list.style.visibility = "visible";
   formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);

    }); 
});




