// Write your JavaScript code here!

window.addEventListener("load", function() {

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse;
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
   })
   //Call the function like you would call a variable!

   let pilotName = document.querySelector("input[name=pilotName]");
   let pilot = pilotName.value;

   let copilotName = document.querySelector("input[name=copilotName]");
   let copilot = copilotName.value;

   let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
   let fuelLevel = fuelLevelInput.value;

   let cargoMassInput = document.quertySelector("input[name=cargoMass");
   let cargoMass = cargoMassInput.value

});




