/*
 *  Given an array of Hero objects, write a function that accepts an alias (string)
    and returns the corresponding hero object. 

    If the search cannot find a hero, return a blank object and display a corresponding message.
 
    What are my inputs?     - string
    What is the output?     - object && || "No hero found message"

 */



const marvelHeroes = [{
    Alias: "Ant-Man",
    Name: "Scott Lang"
},
{
    Alias: "Black Panther",
    Name: "T'Challa"
},
{
    Alias: "Black Widow",
    Name: "Natasha Romanoff"
},
{
    Alias: "Captain America",
    Name: "Steve Rogers"
},
{
    Alias: "Doctor Strange",
    Name: "Stephen Strange"
},
{
    Alias: "Hawkeye",
    Name: "Clint Barton"
},
{
    Alias: "Hulk",
    Name: "Bruce Banner"
},
{
    Alias: "Iron Man",
    Name: "Tony Stark"
},
{
    Alias: "Power Man",
    Name: "Luke Cage",
},
{
    Alias: "Moon Knight",
    Name: "Steven Grant"
},
{
    Alias: "Captain Marvel",
    Name: "Carol Danvers"
},
{
    Alias: "Scarlet Witch",
    Name: "Wanda Maximoff"
},
{
    Alias: "Spider-Man",
    Name: "Peter Parker"
},
{
    Alias: "Thor",
    Name: "Thor Odinson"
},
{
    Alias: "Wasp",
    Name: "Janet van Dyne"
}
];



function findHero(string, arr){

    let foundHero = arr.find((object) => {
        return object.Alias === string
    });

    
    if(foundHero == undefined){
        console.log(`The hero "${string}" cannot be found.`)
    }else{
        console.log(foundHero)
    }

};

findHero("Wasp", marvelHeroes)