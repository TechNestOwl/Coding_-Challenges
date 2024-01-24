//With this array of objects
//I am going to create a function that takes an Array as a parameter

//I am going to sort through the aray and output in either ascending or descending order
//  the population of each "city".




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
        city: "Barry",
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
    {
        city: "Concord",
        state: "North Carolina",
        state_code: "NC",
        population: 60500,
        median_age: 35.7,
        avg_household_size: 2.72
    },
    {
        city: "Charlotte",
        state: "North Carolina",
        state_code: "NC",
        population: 827121,
        median_age: 34.3,
        avg_household_size: 2.52
    },
    {
        city: "Asheville",
        state: "North Carolina",
        state_code: "NC",
        population: 88507,
        median_age: 37.9,
        avg_household_size: 2.18
    },
    {
        city: "Durham",
        state: "North Carolina",
        state_code: "NC",
        population: 257598,
        median_age: 33.2,
        avg_household_size: 2.40
    },
    {
        city: "Greenville",
        state: "North Carolina",
        state_code: "NC",
        population: 90588,
        median_age: 26.2,
        avg_household_size: 2.40
    },
    {
        city: "Raliegh",
        state: "North Carolina",
        state_code: "NC",
        population: 451949,
        median_age: 32.8,
        avg_household_size: 2.42
    },
    {
        city: "High Point",
        state: "North Carolina",
        state_code: "NC",
        population: 109828,
        median_age: 35.5,
        avg_household_size: 2.65
    },
    {
        city: "Gastonia",
        state: "North Carolina",
        state_code: "NC",
        population: 74550,
        median_age: 36.9,
        avg_household_size: 2.67
    },
    {
        city: "Fayetteville",
        state: "North Carolina",
        state_code: "NC",
        population: 201965,
        median_age: 30.7,
        avg_household_size: 2.50
    },
    {
        city: "Winston-Salem",
        state: "North Carolina",
        state_code: "NC",
        population: 241232,
        median_age: 34.7,
        avg_household_size: 2.47
    },
    {
        city: "Greensboro",
        state: "North Carolina",
        state_code: "NC",
        population: 285344,
        median_age: 35.5,
        avg_household_size: 2.36
    },
    {
        city: "Kernersville",
        state: "North Carolina",
        state_code: "NC",
        population: 14,
        median_age: 42,
        avg_household_size: 2.31
    }
];


function citySort(){
    //call all functions here

    sortByAge(cityData);


    tbody = document.getElementById("results");

    let tableRow = "";

    //displaying the data
    cityData.forEach( item => {
        tableRow +=  `<tr><td>${item.city}</td><td>${item.state_code}</td><td>${item.population.toLocaleString("en-US")}</td><td>${item.median_age}</td><td>${item.avg_household_size}</td></tr>`;
    });
    tbody.innerHTML ="";
    tbody.innerHTML = tableRow;

}


// [ COMPLICATED METHOD ] of sorting population size either ascending or descending
// I will demonstrate with the .sort() method further down when sorting by median age.
function sortByPopulation(data, order){

    let sortedPop = [];

    if(order == "ascending"){

        for(let i = data.length - 1; i >= 0; i--){
            
            let popCount= data[i].population;
            sortedPop.unshift(popCount);
            
        }
        sortedPop.sort((a,b) => {return a - b});

    }else if(order == "descending"){
        for(let i = 0; i < data.length; i++){

            let popCount = data[i].population;
            sortedPop.push(popCount)
           
        }
        sortedPop.sort((a,b) => {return b - a})
    };


    return sortedPop;
};


//sorting cities alphabetically 
function sortByCityName(data){

    let sortedCities = [];

    for(let i = 0; i < data.length; i++){

        let newCity =  data[i].city;
        sortedCities.push(newCity);

    }
    sortedCities.sort();

    return sortedCities;
}



//[ SIMPLY ] sorting by median_age
function sortByAge(data){


    data.sort((a,b) => {
        return a.median_age - b.median_age
    })

    //outputing only the median_age of each obj in the array.
    // console.log(data.map(x => x.median_age))
}



