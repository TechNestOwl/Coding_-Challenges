// Array filter()

const characters = [
    {
        name: "Luke Skywalker",
        role: "Jedi Knight",
        affiliation: "Rebel Alliance",
        species: "Human",
        homeworld: "Tatooine"
    },
    {
        name: "Darth Vader",
        role: "Sith Lord",
        affiliation: "Galactic Empire",
        species: "Human",
        homeworld: "Tatooine"
    },
    {
        name: "Leia Organa",
        role: "Princess",
        affiliation: "Rebel Alliance",
        species: "Human",
        homeworld: "Alderaan"
    },
    {
        name: "Han Solo",
        role: "Smuggler",
        affiliation: "Rebel Alliance",
        species: "Human",
        homeworld: "Corellia"
    },
    {
        name: "Yoda",
        role: "Jedi Master",
        affiliation: "Jedi Order",
        species: "Yoda's species",
        homeworld: "Unknown"
    },
    {
        name: "Obi-Wan Kenobi",
        role: "Jedi Master",
        affiliation: "Jedi Order",
        species: "Human",
        homeworld: "Stewjon"
    },
    {
        name: "Chewbacca",
        role: "Co-pilot",
        affiliation: "Rebel Alliance",
        species: "Wookiee",
        homeworld: "Kashyyyk"
    },
    {
        name: "Emperor Palpatine",
        role: "Emperor",
        affiliation: "Galactic Empire",
        species: "Human",
        homeworld: "Naboo"
    },
    {
        name: "R2-D2",
        role: "Astromech Droid",
        affiliation: "Rebel Alliance",
        species: "Droid",
        homeworld: "Naboo"
    },
    {
        name: "C-3PO",
        role: "Protocol Droid",
        affiliation: "Rebel Alliance",
        species: "Droid",
        homeworld: "Tatooine"
    }
];


//***MAP***
//1. Get array of all names
//2. Get array of all species and their homeworld
//3. Get array of objects with just name and role properties
//4. Get array of all first names

//1:
let nameArr = [];
characters.map((i)=>{
    nameArr.push(i.name)
});

//2:
let charType = [];
characters.map((i)=>{
    charType.push([i.species,i.homeworld]);
});

//3:
let charObj = [];
characters.map((i)=>{
    charObj.push({
        name:i.name,
        role:i.role,
    });
});

//4:





//***REDUCE***
//1. Get total mass of all characters
//2. Get total height of all characters
//3. Get total number of characters by eye color
//4. Get total number of characters in all the character names

//***FILTER***
//1. Get characters with mass greater than 100
//2. Get characters with height less than 200
//3. Get all male characters
//4. Get all female characters




//***SORT***
//1. Sort by mass
//2. Sort by height
//3. Sort by name
//4. Sort by gender

//***EVERY***
//1. Does every character have blue eyes?
//2. Does every character have mass more than 40?
//3. Is every character shorter than 200?
//4. Is every character male?

//***SOME***
//1. Is there at least one male character?
//2. Is there at least one character with blue eyes?
//3. Is there at least one character taller than 210?
//4. Is there at least one character that has mass less than 50?