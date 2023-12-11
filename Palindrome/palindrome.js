//my paldindrom function needs to return a boolean value.
// I need to split the given input into an array of strings
// The, I must sift out all special charcters or spaces, and set each idex item to lowercase. 


let resultBox = document.getElementById("result").innerHTML;

function palindromeCheck(){
    let input = document.getElementbyId("input1").value;
   
    // if(input == ""){
    //     alert("please enter a word or phrase")
    // }

    //remove special characters or spaces
    let cleanString = str.replace(/[^A-Z0-9]/ig, "");

    //convert to lowerCase
    cleanString = cleanString.toLowerCase();

    let reversedStr = "";

    //create a reversed string
    for(let index = cleanString.length - 1; index >= 0; index--){
        reversedStr += cleanString[index];
    }
    // check to see if is a plaindrome
    if(cleanString == reversedStr){
        resultBox = "Yes this is a palindrom"
        return true;
    }else {
        return false;
    }

}
