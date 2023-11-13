// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    document.getElementById("missionTarget").innerHTML = `
    <h2>Mission Destination</h2>
    <ol>
        <li>Name: ${name}</li>
        <li>Diameter: ${diameter}</li>
        <li>Star: ${star}</li>
        <li>Distance from Earth: ${distance}</li>
        <li>Number of Moons: ${moons}</li>
        </ol>
        <img src = '${imageUrl}'>
        `;
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
    if (testInput == "") {
        return "Empty";
    } else if (isNaN(parseInt(testInput))) {
        return "Not a Number";
    } else if (!isNaN(parseInt(testInput))) {
        return "Is a Number";
    }
 }
 
 function formSubmission(document, list, h2, pilot, copilot, fuelLevel, fuelStatus, cargoMass, cargoStatus) {
    let faultyItems = document.getElementById("faultyItems");
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let launchStatus = document.getElementById("launchStatus");
    let validatePilot = validateInput(pilot);
    let validateCopilot = validateInput(copilot);
    let validateFuel = validateInput(fuelLevel);
    let validateCargo = validateInput(cargoMass);

    if (validatePilot == "Empty") {
        window.alert("Pilot name required.");
    } else {
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
    }

    if (validateCopilot == "Empty") {
        window.alert("Copilot name required.");
    } else (
        copilotStatus.innerHTML = `Copilot ${copilot} is ready for launch`
    )

    if (validateFuel == "Empty") {
        window.alert("Fuel level required.");
    } else if (validateFuel == "Not a Number") {
        window.alert("Fuel level required must be a number.");
    } else if (validateFuel === "Is a Number") {
        if (Number(fuelLevel) < 10000) {
            faultyItems.style = "visiblity: visible";
            launchStatus.innerHTML = "Shuttle not ready for launch";
            launchStatus.style.color = "red";
        }
    } else {
        fuelStatus.innerHTML = "Fuel level check complete";
    }
    
    if (validateCargo == "Empty") {
        window.alert("Cargo mass required.");
    } else if (validateCargo == "Not a Number") {
        window.alert("Cargo mass required must be a number.");
    } else if (validateCargo === "Is a Number") {
        if (Number(cargoMass) > 10000) {
            faultyItems.style = "visibility: visible";
            launchStatus.innerHTML = "Shuttle not Ready for launch";
            launchStatus.style.color = "red";
        }
    } else {
        cargoStatus.innerHTML = "Cargo mass check complete";
    }

    if (fuelLevel > 10000 && cargoMass < 10000) {
        launchStatus.innerHTML = "Shuttle is Ready for launch";
        launchStatus.style.color = 'green';
        list.style.color = 'green';
        h2.style.color = 'green';
    }
 }
 
 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json();
        });
 
     return planetsReturned;
 }
 
 function pickPlanet(planets) {
    let planetIndex = Math.floor(Math.random() * planets.length);
    let planetPicked = planets[planetIndex];
    return planetPicked;
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;