/*

Given two strings write a function that checks if they are anagrams. Function should return true or false.
Display a message indicating the result of the function.

What are the inputs?

what is the output?

An anagram is two words or phrases made up of the same exact letters, albeit in another orientation. 

*/






function anagramCheck(){

    //clearing the results element
    document.getElementById("results").innerHTML = "";


    let word1 = document.getElementById("input1").value;
    let word2 = document.getElementById("input2").value;



    if(word1 == "" || word2 == ""){
        alert("Please input a value into both fields");
        return;
    }


    //implement isAnagram function
    let anagram = isAnagram(word1, word2);
 
    let msg = "";
    if(anagram == true){
        msg = "The two inputs are in fact anagrams";
    }else{
        msg = "The two inputs are not anagrams";
    }

    document.getElementById("results").innerHMTL = msg;


    function isAnagram(a,b){

        //usign regex to remove white space char and replace with empty string
        // + means two contiguous spaces get reduced to one. 
        word1 = word1.replace(/\s+/g,"");
        word2 = word2.replace(/\s+/g,"");


        //check to see if they're the same length
        if(word1.length != word2.length){
            return false;
        }

        //converting to lowercase
        word1 = word1.toLowerCase();
        word2 = word2.toLowerCase();

        // spliting the string into an array, than sort, than join 
        word1 = word1.split('').sort().join('');
        word2 = word2.split('').sort().join('');

        return(word1 == word2);
        
    }


}



