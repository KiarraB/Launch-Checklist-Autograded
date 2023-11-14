// Write your helper functions here!

require('cross-fetch/polyfill');

//selects planet at random from listedPlanets
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
 //function to validate input - parseInt parses string argument and sets to number
 function validateInput(testInput) {
    if (testInput === "") {
        return "Empty";
    } else if (isNaN(parseInt(testInput))) {
        return "Not a Number";
    } else if (!isNaN(parseInt(testInput))) {
        return "Is a Number";
    }
 }
 
 //formSubmission function
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    //called to properties within index.html
    let faultyItems = document.getElementById("faultyItems");
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let launchStatus = document.getElementById("launchStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");
    //function validating input values function set to variable
    let validatePilot = validateInput(pilot);
    let validateCopilot = validateInput(copilot);
    let validateFuel = validateInput(fuelLevel);
    let validateCargo = validateInput(cargoLevel);

    //If fields are empty, send alert that all fields are required
    if (validatePilot === "Empty" || validateCopilot === "Empty" || validateFuel === "Empty" || validateCargo === "Empty") {
        window.alert("All fields are required");
    //If input is invalid, send alert
    } else if (validateFuel === "Not a Number" || validateCargo === "Not a Number") {
        window.alert("Invalid input type.")
    //If input is a number, set these attributes within index.html to allotted using innerHTML
    } else if (validateFuel === "Is a Number" || validateCargo === "Is a Number") {
        if (fuelLevel >= 10000 && cargoLevel <= 10000) {
            launchStatus.innerHTML = "Shuttle is Ready for Launch";
            launchStatus.style.color = 'green';
            list.style.color = 'green';
            pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
            copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
            fuelStatus.innerHTML = "Fuel level high enough for launch";
            cargoStatus.innerHTML = "Cargo mass low enough for launch";
        } else if (Number(fuelLevel) < 10000) {
             faultyItems.style = "visiblity: visible";
            launchStatus.innerHTML = "Shuttle Not Ready for Launch";
            launchStatus.style.color = "red";
            pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
            copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
            fuelStatus.innerHTML = "Fuel level too low for launch";
        } else if (Number(cargoLevel) > 10000) {
            faultyItems.style = "visiblity: visible";
            launchStatus.innerHTML = "Shuttle Not Ready for Launch";
            launchStatus.style.color = "red";
            pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
            copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
            cargoStatus.innerHTML = "Cargo mass too heavy for launch";
            fuelStatus.innerHTML = "Fuel level high enough for launch";
        }  
        if ((Number(fuelLevel) < 10000 && Number(cargoLevel) > 10000)) {
            faultyItems.style = "visiblity: visible";
            launchStatus.innerHTML = "Shuttle Not Ready for Launch";
            launchStatus.style.color = "red";
            pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
            copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
            cargoStatus.innerHTML = "Cargo mass too heavy for launch";
            fuelStatus.innerHTML = "Fuel level too low for launch";
        } //else {
        //     pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
        //     copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
        //     fuelStatus.innerHTML = "Fuel level high enough for launch";
        //     cargoStatus.innerHTML = "Cargo mass low enough for launch";
        //         if (fuelLevel >= 10000 && cargoLevel <= 10000) {
        //             launchStatus.innerHTML = "Shuttle is Ready for Launch";
        //             launchStatus.style.color = 'green';
        //             list.style.color = 'green';
        //     }
        // }
    }
 }
 //asynchronous function myFetch() to fetch images of planets
 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json();
        });
 
     return planetsReturned;
 }
 //picks random planet from planets array
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