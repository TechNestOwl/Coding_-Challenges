//my paldindrom function needs to return a boolean value.
// I need to split the given input into an array of strings
// The, I must sift out all special charcters or spaces, and set each idex item to lowercase. 


function displayResult(){
    let str = document.getElementById("input1").value;

    if(str == ""){
        alert("enter a word or phrase in the input field")
        return;
    }

    let plaindrome = palindromeCheck(str);

    let msg = "";

    if(plaindrome == true){
        msg = "The phrase is a palindrome"
    } else{
        msg = "The phrase is not a plaindrome"
    }

    document.getElementById("result").innerHTML = msg;

}

document.getElementById("btnSubmit").addEventListener("click",displayResult);

function palindromeCheck(str){
   
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
        return true;
    }else {
        return false;
    }

}


