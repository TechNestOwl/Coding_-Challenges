//With this array of objects
//I am going to create a function that takes an Array as a parameter

//I am going to sort through the aray and output in descending order
//  the population of each item/"city".

//array.sort() out of the box will sort items in an array alphabetically.  Because of this propblem,
/*
because of this problem, always create a compare function. 
*/


//additionally, sort by City Name and median age. 

let cityData = [
    {
        city: "Jacksonville",
        state: "North Carolina",
        state_code: "NC",
        population: 67363,
        median_age: 24.2,
        avg_household_size: 2.51,
    },
    {
        city: "Cary",
        state: "North Carolina",
        population: 160514,
        median_age: 39.9,
        avg_household_size: 2.61,
    },
    {
        city: "Wilmington",
        state: "North Carolina",
        state_code: "NC",
        population: 89270,
        median_age: 35.5,
        avg_household_size: 2.24
    },
    // {
    //     city: "Concord",
    //     state: "North Carolina",
    //     state_code: "NC",
    //     population: 60500,
    //     median_age: 35.7,
    //     avg_household_size: 2.72
    // },
    // {
    //     city: "Charlotte",
    //     state: "North Carolina",
    //     state_code: "NC",
    //     population: 827121,
    //     median_age: 34.3,
    //     avg_household_size: 2.52
    // },
    // {
    //     city: "Asheville",
    //     state: "North Carolina",
    //     state_code: "NC",
    //     population: 88507,
    //     median_age: 37.9,
    //     avg_household_size: 2.18
    // },
    // {
    //     city: "Durham",
    //     state: "North Carolina",
    //     state_code: "NC",
    //     population: 257598,
    //     median_age: 33.2,
    //     avg_household_size: 2.40
    // },
    // {
    //     city: "Greenville",
    //     state: "North Carolina",
    //     state_code: "NC",
    //     population: 90588,
    //     median_age: 26.2,
    //     avg_household_size: 2.40
    // },
    // {
    //     city: "Raliegh",
    //     state: "North Carolina",
    //     state_code: "NC",
    //     population: 451949,
    //     median_age: 32.8,
    //     avg_household_size: 2.42
    // },
    // {
    //     city: "High Point",
    //     state: "North Carolina",
    //     state_code: "NC",
    //     population: 109828,
    //     median_age: 35.5,
    //     avg_household_size: 2.65
    // },
    // {
    //     city: "Gastonia",
    //     state: "North Carolina",
    //     state_code: "NC",
    //     population: 74550,
    //     median_age: 36.9,
    //     avg_household_size: 2.67
    // },
    // {
    //     city: "Fayetteville",
    //     state: "North Carolina",
    //     state_code: "NC",
    //     population: 201965,
    //     median_age: 30.7,
    //     avg_household_size: 2.50
    // },
    // {
    //     city: "Winston-Salem",
    //     state: "North Carolina",
    //     state_code: "NC",
    //     population: 241232,
    //     median_age: 34.7,
    //     avg_household_size: 2.47
    // },
    // {
    //     city: "Greensboro",
    //     state: "North Carolina",
    //     state_code: "NC",
    //     population: 285344,
    //     median_age: 35.5,
    //     avg_household_size: 2.36
    // },
    // {
    //     city: "Kernersville",
    //     state: "North Carolina",
    //     state_code: "NC",
    //     population: 14,
    //     median_age: 42,
    //     avg_household_size: 2.31
    // }
];


function citySort(){
    //call all functions here
}

function sortByPopulation(data, order){

    let sortedPop = 0;


    if(order == "smallest"){
        
       
    }else if(order == "largest"){
        for(let i = 0; i < data.length; i++){

            let popCount = data[i].population;
    
            if( popCount > sortedPop){
                sortedPop = popCount;
            }
        }
        // console.log(sortedPop)
    }


};


// sortByPopulation(cityData, "smallest");

let arr1 = ["dog","pig","zebra", "cat","spider"];

let numArr = [1,3,10,200,50]

numArr.sort((a,b) =>  a - b);


console.log(numArr);
