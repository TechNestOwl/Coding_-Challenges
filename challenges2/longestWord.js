// write a function that returns the longest string in a given array



const marvelHeroes = [
    "Ant-Man",
    "Black Panther",
    "Black Widow",
    "Captain America",
    "Doctor Strange",
    "Hawkeye",
    "Hulk",
    "Iron Man",
    "Luke Cage",
    "Moon Knight",
    "Ms. Marvel",
    "Scarlet Witch",
    "Spider-Man",
    "Thor",
    "Wasp",
];


// returning longest string with for loop
function longestStr(array){
    var longestName = ['test1'];

    for (let index = 0; index < array.length; index++) {
        const name = array[index];
        let testCase = longestName[0];

        
        if(name.length > testCase.length){
            longestName.pop();
            longestName.push(name)
        };
        
    }
    console.log(longestName)
    return longestName;
};
longestStr(marvelHeroes);
