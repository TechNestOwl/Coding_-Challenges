
const codingLanguages = [
    "C#",
    "Python",
    "Go",
    "Java",
    "Kotlin",
    "PHP",
    "Swift",
    "R",
    "Ruby",
    "C and C++",
    "Matlab",
    "Typescript",
    "Scala",
    "SQL",
    "HTML",
    "CSS",
    "NoSQL",
    "Rust",
    "Perl",
];

//driver function, used to display and pass values
function findLanguage(){
    
    let lWord = findLongestName(codingLanguages);

    // let sWord = findShortestName(codingLanguages,lWord)

    document.getElementById("results").innerHTML = lWord;
};

function findLongestName(arrayTBsorted){
   
    let longestName = "";

    for(let index = 0; index < arrayTBsorted.length; index++){

        if(arrayTBsorted[index].length > longestName.length){
            longestName = arrayTBsorted[index];
        }
    }
    return longestName;
};

function findShortestName(arrayTBsorted, lWord){
   
    let shortestName = lWord;

    for(let index = 0; index < arrayTBsorted.length; index++){

        if(arrayTBsorted[index].length < shortestName.length){
            shortestName = arrayTBsorted[index];
        }
    }
    return shortestName;
};
