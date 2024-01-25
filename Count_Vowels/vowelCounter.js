/*
    Given a string write a function that counts the vowels in the string.
    The function should return an integer of the vowel count. 
    Display a message indicating the result of the function. 
    Ignore "Y"

    Exrta credit: have your function return the Vowel count and the vowels found. 
*/


let string1 = "I would like to know how many vowels are in this string";


function vowelFinder(string){

    let input = string.toLowerCase();
    let vowels = ["a","e","i","o","u"];
    let foundVowels = [];
    let vowelCounter = 0;


    function comaparison(vowel){
        
        input.forEach((e)=>{
            if(e == vowel){
                return true
            }else{ return false }
        })

    };



    vowels.forEach((e) => {
        if(comaparison(e) ){

            foundVowels += e; //?
            vowelCounter ++;


        }
    })    

    let output = `Found ${vowelCounter}, which are ${foundVowels}`;


    console.log(output)
    return output;
}

vowelFinder(string1)