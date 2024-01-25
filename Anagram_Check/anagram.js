/*

Given two strings write a function that checks if they are anagrams. Function should return true or false.
Display a message indicating the result of the function.

What are the inputs?

what is the output?

An anagram is two words or phrases made up of the same exact letters, albeit in another orientation. 

*/






// function anagramCheck(){

//     //clearing the results element
//     document.getElementById("results").innerHTML = "";


//     let word1 = document.getElementById("input1").value;
//     let word2 = document.getElementById("input2").value;



//     if(word1 == "" || word2 == ""){
//         alert("Please input a value into both fields");
//         return;
//     }


//     //implement isAnagram function
//     let anagram = isAnagram(word1, word2);
 
//     let msg = "";
//     if(anagram == true){
//         msg = "The two inputs are in fact anagrams";
//     }else{
//         msg = "The two inputs are not anagrams";
//     }

//     document.getElementById("results").innerHMTL = msg;


//     function isAnagram(a,b){

//         //usign regex to remove white space char and replace with empty string
//         // + means two contiguous spaces get reduced to one. 
//         word1 = word1.replace(/\s+/g,"");
//         word2 = word2.replace(/\s+/g,"");


//         //check to see if they're the same length
//         if(word1.length != word2.length){
//             return false;
//         }

//         //converting to lowercase
//         word1 = word1.toLowerCase();
//         word2 = word2.toLowerCase();

//         // spliting the string into an array, than sort, than join 
//         word1 = word1.split('').sort().join('');
//         word2 = word2.split('').sort().join('');

//         return(word1 == word2);
        
//     }


// }

//      split()
//The split method of string values tatkes a patteren and divides this into an ordered list,
// of subtstrings by searching for the pattern. Puts these substrings into an array and returns the array. 
//Paramaters:  

//split(seperator) = pattern describing where each split should occur. could be undefined, a string, or an object with a symbol.split method. (REGEX)
//ommiting a seperator or passing undefined causes split to return an array with the calling string as a single element. 


//split(seperator, limit) = this will be a non-negative number that specifies the number of substrings to be included in the array. If provided, splits the string at each occurance of the specified seperator, but stops when the LIMIT entires of the array have been placed. Leftovers outside these bounds are not included in the new array. If limit is 0, returnss []

//      sort()
// The sort method sorts through an array and returns the same array, now sorted. 
//Default sort order is ascending, buil upon converting elements into strings, then comapring their value with UTF-16.


//      join()
//this method on an array creates and returns a new string by concatenating all the elements and seperating with a comma or specified sperator string. 

function anagramCompare(a, b){

   let word1 =  inputFormat(a);
   let word2 =  inputFormat(b);
   

    if(word1 != word2){
        console.log("this is not an anagram")
    }else{
        console.log("this is an anagram")
    };
}

function inputFormat(word){

    let formattedWord = new String(word);

    formattedWord = formattedWord.toLowerCase();

    formattedWord = formattedWord.split('').sort().join('')
    console.log(formattedWord)

    return formattedWord
}


anagramCompare("doog","god");