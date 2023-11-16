// Write your JavaScript code here!

//const { formSubmission, addDestinationInfo } = require("./scriptHelper");
//on submit, call form submit, event.preventDefault()
window.addEventListener("load", function() {
    let form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        let list = document.getElementById("faultyItems");
        let pilotName = document.querySelector("input[name=pilotName]");
        let copilotName = document.querySelector("input[name=copilotName");
        let fuelStatus = document.querySelector("input[name=fuelLevel");
        let cargoStatus = document.querySelector("input[name=cargoMass]");
        event.preventDefault();
        formSubmission(document, list, pilotName.value, copilotName.value, fuelStatus.value, cargoStatus.value);
        
    });
    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        let planet = pickPlanet(listedPlanets);
        addDestinationInfo(document, planet.name, planet.diameter, planet.star, planet.distance, planet.moons, planet.image);
    });
    
 });