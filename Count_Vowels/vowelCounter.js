/*
    Given a string write a function that counts the vowels in the string.
    The function should return an integer of the vowel count.
    Display a message indicating the result of the function.
    Ignore "Y"

    Exrta credit: have your function return the Vowel count and the vowels found.
*/


let string1 = "I would like to know how many vowels are in this string";


function vowelFinder(string){

    let vowels = ["a","e","i","o","u"];
    let foundVowels = [];
    let vowelCounter = 0;
    let input = string.toLowerCase().split("");

   
    function comaparison(vowel){

        input.forEach((e)=>{
            if(e == vowel){
                foundVowels += e; //?
                vowelCounter ++;
            }
        })
    };
    
    vowels.forEach((e) => {
        comaparison(e)
    })

    foundVowels = foundVowels.split('');
    //filtering out duplicate vowels
    let uniqueVowels = foundVowels.filter(function(value,index,array){
        return array.indexOf(value) === index;
    });


    // let output = `Found ${vowelCounter} vowels, which are ${foundVowels}`;
    
    let output = {
        count : vowelCounter,
        vowels: uniqueVowels,
    };
    if( Object.keys(output).length == 0){
        alert("Error: output object is empty")
    };

    console.log(output);
    return output;
}

vowelFinder(string1)

