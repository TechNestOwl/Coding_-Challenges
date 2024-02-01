
let testString = "Testing how many vowels are in this string";

function getVowlCount(str){
    let vowelCount = 0;
    let vowels = ["a","e","i","o","u"];
    let foundVowels = [];

    str = str.toLowerCase();

    for(let i = 0; i < str.length; i++){
        
        if(vowels.includes(str[i])){
            vowelCount++;
            foundVowels.push(str[i]);
        }
    }


    let vowelObj = {
        "Vowels": foundVowels,
        "Count": vowelCount
    }



    


    // console.log(`There are ${vowelCount} vowels in the given input. Those vowels are ${foundVowels}`)
    console.log(vowelObj);
    return vowelObj
}

getVowlCount(testString);