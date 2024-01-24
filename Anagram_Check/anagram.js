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

        
    }


}



