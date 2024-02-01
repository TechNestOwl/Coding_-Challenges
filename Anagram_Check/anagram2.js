
let testString = "Testing how many vowels are in this string";

function getVowlCount(str){
    let vowelCount = 0;
    let vowels = ["a","e","i","o","u"];

    str = str.toLowerCase();

    for(let i = 0; i < str.length; i++){
        
        if(vowels.includes(str[i])){
            vowelCount++;
        }
    }
    console.log(`There are ${vowelCount} vowels in the given input`)
    return vowelCount
}

getVowlCount(testString);